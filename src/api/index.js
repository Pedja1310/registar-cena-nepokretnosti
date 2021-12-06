import axios from "axios";

const fetchData = (payload) => {
  const { startDate, endDate, cityId, cityCadasterId, realEstateType } =
    payload;

  axios.post(
    "https://warm-river-64553.herokuapp.com/https://katastar.rgz.gov.rs/RegistarCenaNepokretnosti/Default.aspx/Data",
    {
      DatumPocetak: startDate,
      DatumZavrsetak: endDate,
      OpstinaID: cityId,
      KoID: cityCadasterId,
      VrsteNepokretnosti: realEstateType,
    }
  );
};

export default fetchData;
