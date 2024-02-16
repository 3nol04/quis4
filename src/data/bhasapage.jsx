import axios from "axios"
export const bahasa =(callback)=>{
          axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json")
          .then((res)=>{
            callback(res)
          })
          .catch((err)=>{
            console.log(err);
          })
    
}
export default bahasa;