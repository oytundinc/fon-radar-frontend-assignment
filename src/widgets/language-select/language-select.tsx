import { WrappedSelect } from "../../components/select/select";
import { changeLanguage } from "i18next";

const LanguageSelect = () => {

  const rtlLanguages = [
    "he"
  ]

  const changeToRtl = (eventKey: string | null) => {
    const html = document.getElementsByTagName('html')[0]
    html.style.direction = rtlLanguages.includes(eventKey as string) ? 'rtl' : 'ltr'
  }

  const optionsLanguage = [
    { value: "tr", label: "TR" },
    { value: "en", label: "EN" },
    { value: "cn", label: "CN" },
    { value: "he", label: "HE" },
  ];

  const setLanguage = (value: string) => {
    changeLanguage(value);
    changeToRtl(value);
  };


  return (
    <WrappedSelect
      defaultValue="tr"
      options={optionsLanguage}
      onChange={setLanguage}
    />
  );
};

export default LanguageSelect;
