import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} - ${siteConfig.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", backgroundColor: "#0a0a0b", color: "#f4f4f5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: 28, color: "#a1a1aa" }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#22c55e", display: "flex" }} />
          {siteConfig.location}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24, letterSpacing: "-2px" }}>{siteConfig.name}</div>
        <div style={{ display: "flex", fontSize: 44, color: "#818cf8", marginTop: 12 }}>{siteConfig.role}</div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", marginTop: 40, maxWidth: 900, lineHeight: 1.5 }}>{siteConfig.tagline}</div>
        <div style={{ display: "flex", fontSize: 24, color: "#52525b", marginTop: 60 }}>github.com/Okasha-Chaudhry</div>
      </div>
    ),
    { ...size }
  );
}
