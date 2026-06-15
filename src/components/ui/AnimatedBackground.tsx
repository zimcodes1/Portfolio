const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* #05df72 glow orb — top right */}
      <div className="absolute -top-32 -right-32 w-125 h-125 rounded-full blur-[120px] animate-pulse" style={{ background: 'rgba(5,223,114,0.07)', animationDuration: '6s' }} />
      {/* white glow orb — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-105 h-105 rounded-full blur-[100px] animate-pulse" style={{ background: 'rgba(255,255,255,0.04)', animationDuration: '8s', animationDelay: '3s' }} />
    </div>
  );
};

export default AnimatedBackground;