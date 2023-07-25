import { useRouter } from 'next/router';
import URLs from "../URLS.json"

export default function About() {

    const router = useRouter();
    const short: string = router.asPath.replace("/","");
    
    console.log(typeof(URLs));

    const keys = Object.keys(URLs);
    const values = Object.values(URLs);
    

    const map = new Map<string, string>();
    for (let i = 0; i < keys.length; i++) {
      map.set(keys[i], values[i]);
    }
    const long: string|undefined = map.has(short)? map.get(short): undefined;

    if(short) {
      if (long){
        const content: string = "0; url='"+long+"'";
        return (
          <meta http-equiv="Refresh" content={content} />
        );

      } else {
        return (
          <meta http-equiv="Refresh" content="0; url='http://compasslabs.ai'" />
        );
      }
    }

    return null;

}