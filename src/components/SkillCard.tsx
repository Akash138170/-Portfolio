interface SkillCardProps {
  title: string;
  icon: string;
  delay?: number;
  className?: string;
}

const SkillCard = ({ title, icon, delay = 0, className = "" }: SkillCardProps) => {
  return (
    <div 
      className={`skill-card floating-element group cursor-pointer ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{icon}</div>
        <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default SkillCard;