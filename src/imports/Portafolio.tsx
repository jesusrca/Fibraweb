import svgPaths from "./svg-g0opz5xmx5";
import clsx from "clsx";
import type { StaticImageData } from "next/image";
import imgHeader from "figma:asset/54c23f32bd6f559ab9debd7172119e64e625d602.png";
import imgFoto1 from "figma:asset/2d6a4fdf47d9939528b10ed5f0b46774a69b84f0.png";

const asSrc = (image: StaticImageData | string) =>
  typeof image === "string" ? image : image.src;
type GroupProps = {
  additionalClassNames?: string;
};

function Group({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 41">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type Redes1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Redes1({ text, text1, additionalClassNames = "" }: Redes1Props) {
  return (
    <div className={clsx("capitalize content-stretch flex flex-col font-['TWK_Everett:Regular',sans-serif] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px]", additionalClassNames)}>
      <p className="relative shrink-0 w-full">{text}</p>
      <p className="relative shrink-0 w-full">{text1}</p>
    </div>
  );
}
type RedesProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Redes({ text, text1, additionalClassNames = "" }: RedesProps) {
  return (
    <div className={clsx("capitalize content-stretch flex flex-col font-['TWK_Everett:Regular',sans-serif] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px] underline", additionalClassNames)}>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full">{text}</p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full">{text1}</p>
    </div>
  );
}
type FotoImageProps = {
  additionalClassNames?: string;
};

function FotoImage({ additionalClassNames = "" }: FotoImageProps) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto1)} />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <FotoImage additionalClassNames="h-[250px]" />
      <DescriptorText text="Proyecto" />
    </div>
  );
}
type DescriptorTextProps = {
  text: string;
};

function DescriptorText({ text }: DescriptorTextProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="capitalize font-['TWK_Everett:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px] text-nowrap">{text}</p>
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="arrow-up-left">
                <path d="M17 17L7 7" id="Vector" stroke="var(--stroke-0, #3B3B3B)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 17V7H17" id="Vector_2" stroke="var(--stroke-0, #3B3B3B)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <FotoImage additionalClassNames="h-[360px]" />
      <DescriptorText text="Proyecto" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <FotoImage additionalClassNames="h-[550px]" />
      <DescriptorText text="Proyecto" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <FotoImage additionalClassNames="h-[360px]" />
      <DescriptorText text="Proyecto" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <FotoImage additionalClassNames="h-[360px]" />
      <DescriptorText text="Proyecto" />
    </div>
  );
}

export default function Portafolio() {
  return (
    <div className="bg-[#faf9f3] content-stretch flex flex-col gap-[50px] items-start relative size-full" data-name="portafolio">
      <div className="h-[89px] relative shrink-0 w-full" data-name="Header">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgHeader)} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[25px] relative size-full">
            <div className="content-stretch flex gap-[231px] items-center relative shrink-0" data-name="Header">
              <p className="font-['TWK_Everett:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[22px] uppercase w-[210px]">{`FIBRA DESIGN `}</p>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
                <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Logo">
                  <div className="[grid-area:1_/_1] h-[44.835px] ml-0 mt-0 overflow-clip relative w-[30px]" data-name="imagen">
                    <Group additionalClassNames="inset-[0_-0.01%_9.87%_0]">
                      <path d={svgPaths.p2a5fc280} fill="var(--fill-0, #FD84A8)" id="Vector" />
                      <path d={svgPaths.p1c63b300} fill="var(--fill-0, black)" id="Vector_2" />
                    </Group>
                    <Group additionalClassNames="inset-[4.93%_-0.01%_4.93%_0]">
                      <path d={svgPaths.pb70aef0} fill="var(--fill-0, #00804C)" id="Vector" />
                      <path d={svgPaths.p127c8b00} fill="var(--fill-0, black)" id="Vector_2" />
                    </Group>
                    <Group additionalClassNames="inset-[9.87%_-0.01%_0_0]">
                      <path d={svgPaths.p38f9f500} fill="var(--fill-0, #FBEF65)" id="Vector" />
                      <path d={svgPaths.p30b6ee80} fill="var(--fill-0, black)" id="Vector_2" />
                    </Group>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[128px] items-center leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[22px] text-nowrap uppercase" data-name="Ítems">
                <p className="font-['TWK_Everett:Bold',sans-serif] relative shrink-0">Portafolio</p>
                <p className="font-['TWK_Everett:Regular',sans-serif] relative shrink-0">Nosotros</p>
                <p className="font-['TWK_Everett:Regular',sans-serif] relative shrink-0">Contacto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Portafolio">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[40px] py-[25px] relative w-full">
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[440px]">
              <Image />
              <Frame3 />
              <Frame />
              <Frame3 />
              <Frame />
            </div>
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[440px]">
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full" data-name="proyectos">
                <FotoImage additionalClassNames="h-[550px]" />
                <DescriptorText text="Proyecto" />
              </div>
              <Frame1 />
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                <FotoImage additionalClassNames="h-[550px]" />
                <DescriptorText text="Proyecto" />
              </div>
              <Frame1 />
              <Image />
            </div>
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[440px]">
              <Frame2 />
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                <FotoImage additionalClassNames="h-[550px]" />
                <DescriptorText text="Proyecto" />
              </div>
              <Frame2 />
              <Image />
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full" data-name="proyectos">
                <FotoImage additionalClassNames="h-[550px]" />
                <DescriptorText text="Proyecto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between px-[40px] py-[25px] relative shrink-0 w-[1440px]" data-name="Footer">
        <div className="font-['TWK_Everett:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff7070] text-[18px] text-nowrap uppercase">
          <p className="leading-[normal] mb-0 text-[#3b3b3b]">FIBRA ESTUDIO</p>
          <p className="leading-[normal] text-[#3b3b3b]">from Lima, Perú </p>
        </div>
        <div className="content-stretch flex gap-[32px] items-center justify-end relative shrink-0 w-[670px]">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[319px]" data-name="Redes">
            <Redes text="Instagram" text1="Facebook" additionalClassNames="w-[100px]" />
            <Redes text="Linkedin" text1="Bēhance" additionalClassNames="w-[89px]" />
          </div>
          <div className="content-stretch flex items-center justify-between opacity-0 relative shrink-0 w-[319px]" data-name="Redes">
            <Redes1 text="‣ Instagram" text1="‣ Facebook" additionalClassNames="w-[100px]" />
            <Redes1 text="‣ Linkedin" text1="‣ Bēhance" additionalClassNames="w-[89px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
