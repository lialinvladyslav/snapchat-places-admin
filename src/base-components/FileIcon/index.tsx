import clsx from "clsx";

type Variant = "empty-directory" | "directory" | "file" | "image";

interface FileIconProps extends React.ComponentPropsWithoutRef<"div"> {
  variant: Variant;
  type?: string;
  src?: string;
}

function FileIcon({ variant, type, src, className, ...props }: FileIconProps) {
  return (
    <div className={className} {...props}>
      <div
        style={{ backgroundImage: getSVG(variant) }}
        className={clsx([
          "relative block bg-center bg-no-repeat bg-contain",
          "before:content-[''] before:pt-[100%] before:w-full before:block",
        ])}
      >
        {variant == "file" && (
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto font-medium text-slate-500/60">
            {type}
          </div>
        )}
        {variant == "image" && (
          <div className="absolute top-0 left-0 w-full h-full image-fit">
            <img
              className="rounded-md"
              alt="Tailwise - Admin Dashboard Template"
              src={src}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function getSVG(variant: string) {
  if (variant == "empty-directory") {
    return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46'%3E%3Cg id='Group_3' data-name='Group 3' transform='translate(-566.5 -92.5)'%3E%3Crect id='Rectangle_4' data-name='Rectangle 4' width='25' height='39' rx='3' transform='translate(584 94)' fill='%23bbc5d2' stroke='%23aab7c7' stroke-width='0.5'/%3E%3Cpath id='Rectangle_3' data-name='Rectangle 3' d='M3.191,0H22.34a3.1,3.1,0,0,1,3.191,3V36a3.1,3.1,0,0,1-3.191,3H3.191A3.1,3.1,0,0,1,0,36V3A3.1,3.1,0,0,1,3.191,0Z' transform='translate(569.468 93)' fill='%23bbc5d2' stroke='%23aab7c7' stroke-width='0.5'/%3E%3Crect id='Rectangle_5' data-name='Rectangle 5' width='45' height='41' rx='3' transform='translate(567 97)' fill='%23c7cfda' stroke='%23aab7c7' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E%0A\")";
  } else if (variant == "directory") {
    return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46'%3E%3Cg id='Group_3' data-name='Group 3' transform='translate(-566.5 -92.5)'%3E%3Crect id='Rectangle_4' data-name='Rectangle 4' width='24' height='39' rx='3' transform='translate(584 94)' fill='%23bbc5d2' stroke='%23aab7c7' stroke-width='0.5'/%3E%3Cpath id='Rectangle_3' data-name='Rectangle 3' d='M3,0H21a3,3,0,0,1,3,3V36a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z' transform='translate(571 93)' fill='%23bbc5d2' stroke='%23aab7c7' stroke-width='0.5'/%3E%3Crect id='Rectangle_2' data-name='Rectangle 2' width='41' height='41' rx='3' transform='translate(569 97)' fill='%23d6dde7' stroke='%23aab7c7' stroke-width='0.5'/%3E%3Cpath id='Rectangle_5' data-name='Rectangle 5' d='M3,0H42a3,3,0,0,1,3,3V34a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z' transform='translate(567 101)' fill='%23c7cfda' stroke='%23aab7c7' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E%0A\")";
  } else if (variant == "file") {
    return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='37.001' height='46.045' viewBox='0 0 37.001 46.045'%3E%3Cg id='Group_267' data-name='Group 267' transform='translate(-1580.004 -405.977)'%3E%3Cpath id='Subtraction_14' data-name='Subtraction 14' d='M-578.3-6519.478h-31.4a2.3,2.3,0,0,1-2.294-2.294v-40.458a2.3,2.3,0,0,1,2.294-2.293H-586v10.023h10v32.729A2.3,2.3,0,0,1-578.3-6519.478Z' transform='translate(2192.505 6971)' fill='%23c7cfda' stroke='%23aab7c7' stroke-width='0.5'/%3E%3Crect id='Rectangle_419' data-name='Rectangle 419' width='4' height='10' transform='translate(1604 407)' fill='%23c7cfda'/%3E%3Crect id='Rectangle_420' data-name='Rectangle 420' width='3' height='11.998' transform='translate(1615.998 415.505) rotate(90)' fill='%23c7cfda'/%3E%3Cpath id='Intersection_2' data-name='Intersection 2' d='M.409,59.473l0-7.331c2.1,1.984,8.331,8.363,8.331,8.363l-7.308,0A1.333,1.333,0,0,1,.409,59.473Z' transform='translate(1607.075 354.996)' fill='%23d6dde7' stroke='%23aab7c7' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E%0A\")";
  }
}

export default FileIcon;
