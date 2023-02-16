import { WrappedSelect } from "../../components/select/select";
import { changeLanguage } from "i18next";
import i18n from "../../assets/i18n/i18n";

const LanguageSelect = () => {
  const rtlLanguages = ["he"];

  const changeToRtl = (eventKey: string | null) => {
    const html = document.getElementsByTagName("html")[0];
    html.style.direction = rtlLanguages.includes(eventKey as string)
      ? "rtl"
      : "ltr";
  };

  const optionsLanguage = [
    { value: "en", label: "EN" },
    { value: "tr", label: "TR" },
    { value: "cn", label: "CN" },
    { value: "he", label: "HE" },
  ];

  const setLanguage = (value: string) => {
    changeLanguage(value);
    changeToRtl(value);
  };

  return (
    <WrappedSelect
      defaultValue={i18n.language}
      options={optionsLanguage}
      onChange={setLanguage}
    />
  );
};

export default LanguageSelect;
