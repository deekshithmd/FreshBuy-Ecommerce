import { Link } from "react-router-dom";
import { useData } from "../../contexts";
export default function Occasional() {
  const {dispatch}=useData()
  return (
    <div className="occasional-products">
      <Link
        to="/productlist"
        className="occasional-item-1 link-style-none flex"
      >
        <span className="text-md text-bold margin-b">
          Alltime available fruits
        </span>
        <img
          src="https://i.postimg.cc/h4L1Dk8D/alltime.jpg"
          alt=""
          onClick={() => dispatch({ type: "ALLTIME" })}
        />
      </Link>
      <Link
        to="/productlist"
        className="occasional-item-2 link-style-none flex"
      >
        <span className="text-md text-bold margin-b">
          Winter special fruits
        </span>
        <img
          src="https://lh3.googleusercontent.com/ZxH5pfh9BTAHpxiw2lgZnBzJFnoonwcMTCqoKYzo_jy-C4CWEnLumA9Ipt3_gzw0flfecXPFmVn8xLcMXgQTaxTtGJTlASqBkK2-ZQVRoPnuNEnUyTDU6ippPanDswOsBUpoNqKrYC8rGvQps3La3e5aAHS_deZzBS7Zfjfbqi-j-XdsZ148EuGweF_KqV7WZmxvf3rlISMgSpENYqQDy-j87jv9GmCZ-HP8O7gAI_NQisyh4YV2hkw5xQLX17-qVwt5gluBuBdro1loidUQKAjigQUsrjc7dlL2NUu83l_nSAWBJkwM7VUPlmGsHcvLtwuYWZFcHYKVZWcDsz7WyfoKcqoVkJPV6KNHeruA5sFPWqynCJVZrA7Ch-d7A6cEBeBGBTxxN9trjjV0tBrFxDUlcJ-cJ8qtWFr-cfY6p-1OXhAq_gAkPUFmmtTjac1hiCFcYJNITWRLnRKWYDAXGsQSxEzTCR0AMwZzSQwENGaWiOFM2a89KtezLA5JT8IgSJ39fiuUoV8cWr5U9DdyE7nadrfm3f7h74aLeNiStUKHt7xpuKQYB1FLEjW-JFQqhLXGdaxZzMwpIju0kYjyUBKOTw37srpu7G9Pam7fYQi6t6S4V2StqzowmiD4XJUCeiBuDc8--Yel4aQKSjt5LyBYXuOGfbuea95l-acjYN8NbAEnRh11wIypjRrOYNZfxcy4BP_si7L2mAraYIXXmmWm-WwdddVhs6Ov47reQTeuOkpb_S2RdI04rDFA=w600-h400-no?authuser=0"
          alt=""
          onClick={() => dispatch({ type: "WINTER" })}
        />
      </Link>
      <Link
        to="/productlist"
        className="occasional-item-3 link-style-none flex"
      >
        <span className="text-md text-bold margin-b">
          Summer special fruits
        </span>
        <img
          src="https://lh3.googleusercontent.com/pQoAcv7yq-8rUCDGx4km_1PtKYguGTNBNrKbwf0gkANcUnx0j80C0KRhIil7xwLCsARxKpXC_gCqKgm9QQM7TJDwOBWh9f3t-CsiAaFqTu1HvfE1ugw1lbgN5kISsWBCY3MZ8CfkIK-A-OVIm2q5v3BJyIuoHRFDs8zyhsZ36MyzXRFSNN_1aGPRKGacsJNnfgLD20BLiWM5c49-Nbzgu8viaBOMPW1bSDLF1PcfH_17RXs2z5u1-mW7QP8LJWndC5hzBO8_pZdXlegfh4dO-jJjdhztczj5AXyuQBmk587bRkwmfNuNXxTjbmYbEW1lYysC75y9LAkLFe6Kxg7EikXHwLRIS1_mfNBJ8JJdBCtNcd87Y2RHNyLmZoENMGPo0qxs38nKR_VVCgRnO0cE0hEPx9tudm-UCJU4n5RTvK_n05hbfghIMRc5C3E0hhBzdwvyhAxW8Idt6zGyeDdSgndxxxqBkAt-ASdLCz7IXp9jWzwbY55Yc2HOgyq4Ka9zGnwDPPr-R4kqI700XQNDCxK381Y3FHROBMcjIpqVxsVyAfDIjMF74Nzqc88MLybDhnWxqKTsiCgzFbJSgzGPGQ1Cw-hV92xrPpNwgeJDikykAr6lceNzpfvMH24Ciwas0vk8YMpXCxtSQsDk3lMmy39GOQjtT9CjltGqTpEpgfNXS2iUFfMOoIVMI9PGwz4XsFvFM62V5DlGMbI_0YdJ2mLM_bneb3KL2k0Qc3sQ6lSokjddnuxfxjPsPzi2=w259-h194-no?authuser=0"
          alt=""
          onClick={() => dispatch({ type: "SUMMER" })}
        />
      </Link>
    </div>
  );
}
