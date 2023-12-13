import * as lucideIcons from "lucide-react";
import { twMerge } from "tailwind-merge";

export const { icons } = lucideIcons;

interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: keyof typeof icons;
  title?: string;
}

function Lucide(props: LucideProps) {
  const { icon, className, ...computedProps } = props;
  const Component = icons[props.icon];
  return (
    <Component
      {...computedProps}
      className={twMerge(["stroke-[1] w-5 h-5", props.className])}
    />
  );
}

export default Lucide;
