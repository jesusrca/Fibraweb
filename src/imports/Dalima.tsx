import svgPaths from "./svg-kh6q6kq73d";
import clsx from "clsx";
import type { StaticImageData } from "next/image";
import imgHeader from "figma:asset/54c23f32bd6f559ab9debd7172119e64e625d602.png";
import imgFoto1 from "figma:asset/2d6a4fdf47d9939528b10ed5f0b46774a69b84f0.png";
import imgFoto8 from "figma:asset/ab0a41b439696b9145a6c4d788938857b2e01553.png";
import imgFoto9 from "figma:asset/5d04b1baf73acf8738e0feba0d885f3a533949e2.png";
import imgFoto4 from "figma:asset/60c21480204b3063f8e5c8bc51aff78e6d15a856.png";
import imgFoto7 from "figma:asset/df16066dec67046a25faf7d071cbf4682f4710ee.png";
import imgFoto10 from "figma:asset/4c029a20b44b765fbe6363a9f5bef50fb9e33c2e.png";
import imgFoto11 from "figma:asset/3e43781ebf329e0593d4400b7095e3caae3a39cf.png";
import imgFoto12 from "figma:asset/ffcb57708538b3337c863382cff6e0f5b7917c21.png";

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
    <div className={clsx("capitalize content-stretch flex flex-col font-['TWK_Everett:Regular','Noto_Sans:Regular',sans-serif] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px]", additionalClassNames)}>
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

export default function Dalima() {
  return (
    <div className="bg-[#faf9f3] content-stretch flex flex-col gap-[57px] items-start relative size-full" data-name="Dalima">
      <div className="h-[89px] relative shrink-0 w-full" data-name="Header">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgHeader)} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[25px] relative size-full">
            <div className="content-stretch flex gap-[231px] items-center relative shrink-0" data-name="Header">
              <p className="font-['TWK_Everett:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[22px] uppercase w-[210px]">{`FIBRA DESIGN `}</p>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
                <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Logo">
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
              </div>
              <div className="content-stretch flex font-['TWK_Everett:Regular',sans-serif] gap-[128px] items-center leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[22px] text-nowrap uppercase" data-name="Ítems">
                <p className="relative shrink-0">Portafolio</p>
                <p className="relative shrink-0">Nosotros</p>
                <p className="relative shrink-0">Contacto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Portafolio interna">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-0 relative w-full">
            <div className="h-[816px] relative shrink-0 w-full" data-name="Foto 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto1)} />
            </div>
            <div className="h-[816px] relative shrink-0 w-full" data-name="video">
              <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
                <source src="/_videos/v1/41e38d1faff47d7332f9d043812163a96a5e535c" />
              </video>
            </div>
            <div className="h-[800px] relative shrink-0 w-full" data-name="Foto 8">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto8)} />
            </div>
            <div className="h-[800px] relative shrink-0 w-full" data-name="Foto 9">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto9)} />
            </div>
            <div className="h-[816px] relative shrink-0 w-full" data-name="Foto 4">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto4)} />
            </div>
            <div className="h-[800px] relative shrink-0 w-full" data-name="Foto 7">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto7)} />
            </div>
            <div className="h-[816px] relative shrink-0 w-full" data-name="Foto 10">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto10)} />
            </div>
            <div className="h-[904px] relative shrink-0 w-full" data-name="Foto 11">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto11)} />
            </div>
            <div className="h-[816px] relative shrink-0 w-full" data-name="Foto 12">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={asSrc(imgFoto12)} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between px-[40px] py-[25px] relative shrink-0 w-[1440px]" data-name="Footer">
        <div className="font-['TWK_Everett:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff7070] text-[18px] text-nowrap uppercase">
          <p className="leading-[normal] mb-0 text-[#3b3b3b]">FIBRA ESTUDIO</p>
          <p className="leading-[normal] text-[#3b3b3b]">from Lima, Perú. </p>
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
