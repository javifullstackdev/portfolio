"""Genera la composición desktop (claro) + móvil (oscuro) para la tarjeta de proyecto."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
ASSETS = (
    ROOT.parent.parent
    / ".cursor"
    / "projects"
    / "c-Users-elchi-OneDrive-Escritorio-DAM-portfolio"
    / "assets"
)
# Fallback: rutas directas si el script se ejecuta desde portfolio/
DESKTOP = Path(
    r"C:\Users\elchi\.cursor\projects\c-Users-elchi-OneDrive-Escritorio-DAM-portfolio\assets\c__Users_elchi_AppData_Roaming_Cursor_User_workspaceStorage_83f4681541d93d9b8e4fc26ee30f11fc_images_image-f7e0881f-76b4-4f46-b31c-954d2f6f2dbc.png"
)
MOBILE = Path(
    r"C:\Users\elchi\.cursor\projects\c-Users-elchi-OneDrive-Escritorio-DAM-portfolio\assets\c__Users_elchi_AppData_Roaming_Cursor_User_workspaceStorage_83f4681541d93d9b8e4fc26ee30f11fc_images_image-b1b309e5-8c3d-4162-a824-c4c51bdff6bb.png"
)
OUT_DIR = ROOT / "public" / "projects"


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def drop_shadow(
    im: Image.Image, offset: tuple[int, int] = (0, 18), blur: int = 28, opacity: int = 140
) -> Image.Image:
    shadow = Image.new("RGBA", (im.width + blur * 2, im.height + blur * 2), (0, 0, 0, 0))
    alpha = Image.new("L", im.size, opacity)
    shadow.paste(alpha, (blur + offset[0], blur + offset[1]))
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    out = Image.new("RGBA", shadow.size, (0, 0, 0, 0))
    out.paste(shadow, (0, 0), shadow)
    out.paste(im, (blur, blur), im)
    return out


def scale_to_height(im: Image.Image, height: int) -> Image.Image:
    ratio = height / im.height
    width = round(im.width * ratio)
    return im.resize((width, height), Image.Resampling.LANCZOS)


def build_canvas(width: int) -> Image.Image:
    canvas = Image.new("RGBA", (width, round(width * 10 / 21)), (12, 14, 28, 255))
    draw = ImageDraw.Draw(canvas)
    # Glows suaves
    for cx, cy, color in [
        (width * 0.2, canvas.height * 0.3, (34, 211, 238, 35)),
        (width * 0.85, canvas.height * 0.55, (167, 139, 250, 40)),
    ]:
        glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
        gdraw = ImageDraw.Draw(glow)
        gdraw.ellipse(
            (cx - 280, cy - 180, cx + 280, cy + 180),
            fill=color,
        )
        glow = glow.filter(ImageFilter.GaussianBlur(60))
        canvas = Image.alpha_composite(canvas, glow)

    desktop = Image.open(DESKTOP).convert("RGBA")
    mobile = Image.open(MOBILE).convert("RGBA")

    pad = round(width * 0.028)
    desktop_h = canvas.height - pad * 2
    desktop_img = scale_to_height(desktop, desktop_h)
    dr = 16
    dmask = rounded_mask(desktop_img.size, dr)
    desktop_frame = Image.new("RGBA", desktop_img.size, (0, 0, 0, 0))
    desktop_frame.paste(desktop_img, (0, 0))
    desktop_frame.putalpha(dmask)

    mobile_h = round(canvas.height * 0.88)
    mobile_img = scale_to_height(mobile, mobile_h)
    mr = 28
    mmask = rounded_mask(mobile_img.size, mr)
    mobile_frame = Image.new("RGBA", mobile_img.size, (0, 0, 0, 0))
    mobile_frame.paste(mobile_img, (0, 0))
    mobile_frame.putalpha(mmask)
    mobile_shadow = drop_shadow(mobile_frame)

    dx = pad
    dy = (canvas.height - desktop_frame.height) // 2
    canvas.paste(desktop_frame, (dx, dy), desktop_frame)

    mx = width - mobile_shadow.width - pad + round(width * 0.01)
    my = (canvas.height - mobile_shadow.height) // 2
    canvas.paste(mobile_shadow, (mx, my), mobile_shadow)

    # Borde sutil del canvas
    draw.rounded_rectangle(
        (0, 0, canvas.width - 1, canvas.height - 1),
        radius=20,
        outline=(255, 255, 255, 18),
        width=2,
    )
    return canvas


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    canvas_2x = build_canvas(2400)
    canvas_1x = canvas_2x.resize(
        (1200, round(1200 * 10 / 21)), Image.Resampling.LANCZOS
    )

    out_1x = OUT_DIR / "portfolio-composition.png"
    out_2x = OUT_DIR / "portfolio-composition@2x.png"
    canvas_1x.convert("RGB").save(out_1x, "PNG", optimize=True)
    canvas_2x.convert("RGB").save(out_2x, "PNG", optimize=True)
    print(out_1x, canvas_1x.size)
    print(out_2x, canvas_2x.size)


if __name__ == "__main__":
    main()
