type RedesProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Redes({ text, text1, additionalClassNames = "" }: RedesProps) {
  return (
    <div className={`capitalize content-stretch flex flex-col font-['TWK_Everett:Regular',sans-serif] gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[#3b3b3b] text-[18px] underline ${additionalClassNames}`}>
      <a href="#" className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full hover:opacity-70 transition-opacity">{text}</a>
      <a href="#" className="[text-underline-position:from-font] decoration-solid relative shrink-0 w-full hover:opacity-70 transition-opacity">{text1}</a>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] md:gap-0 px-[20px] md:px-[40px] py-[25px] md:py-[25px] relative shrink-0 w-full bg-[#faf9f3]" data-name="Footer">
      <div className="font-['TWK_Everett:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ff7070] text-[16px] md:text-[18px] uppercase">
        <p className="leading-[normal] mb-0 text-[#3b3b3b]">FIBRA ESTUDIO</p>
        <p className="leading-[normal] text-[#3b3b3b]">from Lima, Perú </p>
      </div>
      <div className="content-stretch flex gap-[20px] md:gap-[32px] items-start md:items-center justify-start md:justify-end relative shrink-0 w-full md:w-auto">
        <div className="content-stretch flex flex-col sm:flex-row gap-[12px] sm:gap-[20px] md:gap-[32px] items-start sm:items-center justify-start sm:justify-between relative shrink-0 w-full md:w-[319px]" data-name="Redes">
          <Redes text="Instagram" text1="Facebook" additionalClassNames="w-[100px]" />
          <Redes text="Linkedin" text1="Bēhance" additionalClassNames="w-[89px]" />
        </div>
      </div>
    </div>
  );
}
