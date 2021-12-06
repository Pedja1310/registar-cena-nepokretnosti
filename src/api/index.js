import axios from "axios";

const fetchData = (payload) =>
  axios.post(
    "https://warm-river-64553.herokuapp.com/https://katastar.rgz.gov.rs/RegistarCenaNepokretnosti/Default.aspx/Data",
    {
      DatumPocetak: payload.startDate,
      DatumZavrsetak: payload.endDate,
      OpstinaID: payload.cityId,
      KoID: payload.cityCadasterId,
      VrsteNepokretnosti: payload.realEstateType,
    }
  );

export default fetchData;
