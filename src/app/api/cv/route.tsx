import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument, CV_FILENAME } from "@/cv/CvDocument";

export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(<CvDocument />);

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${CV_FILENAME}"`,
      "Cache-Control": "private, no-cache",
    },
  });
}
