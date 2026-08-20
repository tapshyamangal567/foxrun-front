"use client";

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 will-change-transform">
      {/* Top-Right Soft Radial Glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(255, 180, 0, 0.18) 0%, rgba(255, 180, 0, 0) 70%)",
        }}
      />

      {/* Bottom-Left Soft Radial Glow */}
      <div
        className="absolute -bottom-40 -left-40 w-[550px] h-[550px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(255, 180, 0, 0.15) 0%, rgba(255, 180, 0, 0) 70%)",
        }}
      />
    </div>
  );
}
