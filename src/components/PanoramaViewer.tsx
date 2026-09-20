import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";

export default function PanoramaViewer({ image }: { image: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    viewerRef.current = new Viewer({
      container: containerRef.current,
      panorama: image,
      navbar: ["zoom", "fullscreen"],
      defaultZoomLvl: 0,
    });

    return () => {
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, [image]);

  // CHANGE: width: 100%, height: 100% instead of aspectRatio: "16 / 9"
  return <div ref={containerRef} style={{ width: "100%", height: "100%", background: "#000" }} />;
}
