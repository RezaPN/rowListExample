import axios from 'axios';

export async function filterFetch(requestConfig) {
  try {
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    if (error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(error);
    }
  }

  // if (
  //   response.status !== 401 &&
  //   response.status !== 200 &&
  //   response.status !== 404
  // ) {
  //   if (response.status == 503) {
  //     throw new Error(
  //       `${response.status}: Maaf, terdapat masalah pada jaringan Anda. Silahkan coba kembali.`,
  //     );
  //   } else {
  //     throw new Error(
  //       `${response.status}: Maaf, terjadi gangguan pada sistem kami. Silahkan coba beberapa saat lagi.`,
  //     );
  //   }
  // } else {

  //   const json = response.data;
  //   console.log(json.response);
  //   if (json.response == 401) {
  //     throw new Error(JSON.stringify(json));
  //   } else if (json.response == 404) {
  //     throw new Error(`404: ${json.message}`);
  //   } else if (json.response != 200) {
  //     throw new Error(json.message || 'Error API fetch data');
  //   }
  //   return json.result;
  // }
}
