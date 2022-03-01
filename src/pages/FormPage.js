import { useState } from "react";
import FormPage1 from "../components/FormPage1";
import FormPage2 from "../components/FormPage2";
import FormPage3 from "../components/FormPage3";

const FormPage = () => {
  const [formPage, setFormPage] = useState(1);

  const changeFormPage = (page) => {
    setFormPage(page);
  };

  const handlePageChange = () => {
    switch (formPage) {
      case 1:
        return <FormPage1 changeFormPage={changeFormPage} />;
      case 2:
        return <FormPage2 changeFormPage={changeFormPage} />;
      case 3:
        return <FormPage3 changeFormPage={changeFormPage} />;
      default:
        return <FormPage1 changeFormPage={changeFormPage} />;
    }
  };

  return handlePageChange();
};

export default FormPage;
