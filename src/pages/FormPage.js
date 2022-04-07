import { useState } from "react";
import { Container } from "@mui/material";

import FormPage1 from "../components/FormPage1";
import FormPage2 from "../components/FormPage2";

const FormPage = () => {
  const [formPage, setFormPage] = useState(1);

  const changeFormPage = (page) => {
    setFormPage(page);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${"/images/background-image.png"})`,
        backgroundSize: "cover",
        height: { xs: "90vh", sm: "95vh" },
        paddingX: "2rem",
        width: "100%",
        borderTopLeftRadius: { xs: "25px", sm: "0px" },
        borderTopRightRadius: { xs: "25px", sm: "0px" },
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {formPage === 2 ? (
        <FormPage2 changeFormPage={changeFormPage} />
      ) : (
        <FormPage1 changeFormPage={changeFormPage} />
      )}
    </Container>
  );
};

export default FormPage;
