import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Apple",
    category: "fruit",
    rating: 4.5,
    discount: 20,
    price: 100,
    image:
      "https://lh3.googleusercontent.com/4pwYzie95KhfXz8gKHBkjcttrWNlZiGNFjF01501OfDjNKtvtHHC01xdfhTF9DOAIaLrAx9qU3i4GGFNxTSlEckhAVzwlv9dv3u6_uPSeWeln9hvzR89byNpRSbuujD9_NmkilJF3GUNRzH2_eVGYNVjZ3vA2vZQ6xTnNEPp9AE7xLFY1x5JppiF7rtNmUbpWeEfDvoGO5pBn8_js78tp73VitlkDIMJXK_aXE4BHnfBXW0KaBJHi3cwnlTzH4t7JFzLRz13bJC-Vpgm7oNhHunMGqjCeqgvJ_QB7aWSH1UzD49muxVZkMG2Q6xWozpgQCt80YFJtT9BR6RNQLRd2zDz4RlRUPDm2PQIzkfPu-x-7fsRMcVUqONGPwiBhEVwJht21x2AwWhj6n3Dtfz7wj5oK5rhLQ32N41ZsPj6UbDSpy3e1hAw9DUKbKDMHBmXh7E5do5sKFRQrZo6gB9KCJoZDXhPunPgFpngCL5z7wrM0k6QZrENCDCU59GdMlzuy9TDLLlxkwcfyWUL-I2k9ug7vYX5FN1uvXZXMnibxbDjX5eM0EyU2DiZoEPm8317qbpoX7-5iCFK1HlkIALnokTew4S0nbwuNenYHwA_ig5qNOFHa8n-Z8l_S6hOg1-CpUp9ZMqD5oh0E1Eh5LoWUqqXGnpHCO_y0VBwkgXPEMuk_SAEHbS76iNMP8C-dUobIX-EAmWzhBNtNHVdUNuMqMVF=s400-no?authuser=0",
  },
  {
    _id: uuid(),
    title: "Onion",
    category: "allium",
    rating: 2.5,
    discount: 10,
    price: 150,
    image:
      "https://lh3.googleusercontent.com/b6P_sndyGxGYvEBNqulOnYd9kk40grbbw72p0Il5FZoa49I1Jc11K6F1c2dSDwVgvm7t_xQQFFRSbNzOqIJ59IGbXELnuqclTfIXOvvySMxytP5f_8FBK8Sbkp9QtT-E0xxR2BrqFuBmeHYkllZpqhE00UeJXKQbd9uG32867-M9P7CS94fAaiAYIY52tGabwJwTaaYitwE-SfssyhXlU6VhNzUhsXZ2FLLbngOT1q-K9-26D9p1lwe3mKjiXv1sgizu8MR6UoE30DlPQl_G0qQcqq78BqPXxU7DHuTW6AXRsTEjXC3VLPuZ677KtislAn3Nmx-HkK32X03RBaVA95m9oxsvm98uCR7uBmbF3ETWzEIGoP0ltuP9o3AMDsjertsJ_rK2yoHTK8rmI4qHxt0C1ntiUuhs7v1aWBKmUy1zEqQ-nhvF8C8MAcgr_X-6VLK6eh8U0wfiuGylzkkgdG1hv_jWHzgbqbXu1ZOBbrp-Nt4pO9oEcfXbaGmyfb52cI0NJILEEiQfVHWOyzmAYytWfJmWhrj8qeUKQaXXoRkDVdz_ew4SsftxmBqH18Aq8jllXhuWLkZ6Gc90bx_LOE_6VbvJHJ8fLCEQNHJs-PeNX_5L-FixoiOqDvRTt03wblBm9KVKLIEka2CLTgwkFUjhgaQ2gV0Zm_YxHUqB3q0nFpHdhj47idIBVBQiSdigVYAml6tnNHJtefkDGhbJXgGy=w217-h232-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Garlic",
    category: "allium",
    rating: 4.0,
    discount: 30,
    price: 160,
    image:
      "https://lh3.googleusercontent.com/91q6fiQEE8CI9K9HbxvbpIK53YN67qIYkZ_Tc9RmDpys4mMlgJt3VOqPQyK6vmyRz5bxoclYcdMHqJAyx9rG05CWPS218Uh1ltTKrcTIm5iIHGrxfW_tX3sNP7y7X-ypXgD89mxxZ89hiEW84Vdp_V6rn4uMhmvfFb8ix292sfQV5CXIKNgkQlgt30Z1OuHMbtJyWmB6M2nlmzrA6XXPdu5A5zialOjDPFkLTsHvuT1i38I_dWdjVfCzLvQ4iYzA6mC12vZ1SAAoNY-gLCAt9umJxP13sSKVpeMWtN914H7DXS0Q4Z2f8Fsfl1t1ZDx2m-Z7tvieQnti126ZjfsZmSRL9stFoczB4mHqWcXDOcHZi8j4rVXZOm4Jl6loMtSiLOSRVFnZctCZgKBwQjw_Bjywrvwn7CptJCtziyGxQ8UkhJLmoB3rabU2UMkiL88Bhrhqf7y6BzG3Jnrfquw3zfrPiS9eWOHSTjCf1-_qoTrvgKowzyhOrcC8vWIe-URboiyjCLVRDb72qSyXDMbUeVXEgk3B0C2v7GYw0VjhNX__vTLM39ognUym0GGL_UJZgBuBExeWfwOJOdSqwEdlHzKfnkHCn2WIf81LZFrlIffv6sTF1rvRxzX3IDDvocjnY7Oq5kQQlXe3UT274GUWS8cOZn90Fc-p6PnbwuPFAOIQP_O2TkKTkgy-A2H1NlezMslwtSImG4G6U5k9sHyrDcLM=s225-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Brocolli",
    category: "cruciferous",
    rating: 3.2,
    price: 110,
    discount: 20,
    image:
      "https://lh3.googleusercontent.com/O3PTJIJmAhMYFl5ttbpzs6C6XM2XTPJcdSYpl45Twq3-QvyaEEBG6yJsPLVpkYhSeP3g6fFE8ZnTKSZsVXJacy7zPPWHKQCeA_tIUnybaCze5BgTBqj_JzYpep9p0YFhuGGKW9UqeSRbGnXTAVmiidffsWUySMTkl_i8pPsXoig4ut-BjsL3CEALW5bLMIZ8ExivkyeCjuEX-zHmhG0BjL-yulwUcq2l8c4Sxth67l-M1Ba8pMF0vDmZ1qibbv60PVSHALfoLN6-aQlfPXIsqx_HsvA0J7GuPAsq2rauXyObvd3N2Ea_wFlpTxcSmxksHnVSj5t9IQ0-i6bD2pS2shhtDNPr8sJzPbgpsXSmOYwZdPYs_5AaOTLtGqlItKaEWHRWR0uWdm3TbxYkY3BQmzkwi0W89pBwCk51fjSI11jh_vuYxej7R1uH9oc3G3zD_-qeeJWcsokOchaYsc-RCD2ELn0Gn79cUrPK-wWHc3gpjljqT_4Nbga2F8uPOScZNjeEqqjamFc0cO-XesIzmyX4HyKMq6TO2AyAHIZZYbo9jDBlxfcK5uLqqD6IANCi23KPs3jyBNrne9Yi79YSVwyGZCmPYRgzxoy_1Ba4y357Gj7bKR5a_nTTycThUj9tBT4rrPxgCCbQNkX4nBBzPGH8yEZwPvDZtOVeskT5vmT0lO_Rp6CHwBYx4KqcdFEerSDV2_Ih1f0ZWf5Nmy1euDUn=w236-h213-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Cualiflower",
    category: "cruciferous",
    rating: 3.5,
    price: 140,
    discount: 30,
    image:
      "https://lh3.googleusercontent.com/N3N8cozYmv9h--KoRtQLcoJXicczHu2sSkNjQlm_D6W3wMheSIniQ8Ex_M3bohms8OA0TSBff0EcbBrsjQsuzSXZoF44HUKYKyw4P6jphqf5mn94tbbwa93G9f_v46EgmgG0QkdlwzKDN3pWNNb5Dv3YJPjdv-8bckeuEmmYJ_VHVDOz0q0o0DIRctxyOyKTCmXgFq1FFIXgZ6Jgcjat_UtyW94syViijA8n7-GXUP3H7atsffAa_h64dg2Sv8j0Pnea34KAsJzEfTbVpqubcKD6kY_SmrR6az15Kb9s4SgrxbvsYW0PhsPH-s7nF4UljyiLOv9fuiAt5L-KmTgaecxYBuD5MKf4GE0CfstVQgxiQiUvTdMDuPvYIWQHbe_KFINvOQcS4lIfY_sVWCqGIZfQSyrcjcC4PeAgKCXx50LVhJRu4_navyJyZyqLKFx6aERGdiyLGsu-EvW_q1K86Lu9XTzEdTc5diHSvzlj085rjzvvCj6O6lle9MXMWu-O9xUnxePFSnMlMjiOGHUoBtgFa1ezFLh-DbXlanLjVv29SR52aqb9pQxLAFsC76ejnz3GL-7bCuKUvbLuD-v9-IsemNsIUWpEqQMmr6SK-2MY1Ifz3W89rOQlyLL-3YymDGfpZl_wePwRBhmj3vKrc5beXVRGBbLGw6HZu4Dqcx-Bz11qjwUBorPPYOxURWaUrsAdQi1RIyHf25A9VOrJ9fAm=w223-h226-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Pinapple",
    category: "fruit",
    rating: 3.5,
    discount: 30,
    price: 190,
    image:
      "https://lh3.googleusercontent.com/jk24jdEPGE3CTbVxrXdFOpO6DNpgzAHYi1L1dxNebtg4a18RD-lr7B33XHgfKbTMP5x2LSJ2hZq4z-p-SLqrR032MuDp_OIpQ8WreBXiVJTqmoZ4iPyzvPkKZpypIWxUJVouuz7P-Y65HVydYv5en_dmjWFgSeUSVHbNf4uvSGinawUdjhMSxgTVCTz0hS1J_A1IE4yzJTbQF10e9oH5-bqlV15ELrxW2d7-MarrJXH6DTRopzuiK-ohQ7_Q5kJjsatr_K1Y_usmFLg1W_DkljV9Tb5rVKaYGvc2yLpXIhVdK7eW0UJ_JLRA2zleb-0NFys3Qtav6QCpnzjFHAM6hPK9tLPl5GYrSvCRWvfwNg0r2V9wAyC91XWGoi1YA4XGpn1YRKSJ6Qb8OLDx9y3MjITVTpiHXKULoo7N6zhYeo_9CyE-QoO1m_auKxBp6gq6xP_1HSOi8S1fbEeVz5GAUp0aCBTCAmJA2SlsfMBbIw5cM9fUQWvtRhKJeei2uDky-n39mdAANNVlojySPShH1VZ-fuM_NcakOwdVelIW8RTYVSewi4hToYantNd6DAWP6XL1_imymATMVkGnlfDMO4lWFPmjjwIHwMjbtUwrfMkGnJ2FlkstVsDqu-HKdbRAyf78fi6c4m1FM1LVfFV8aTj6Adqlx8wOxZrVdt5ErQXt-zCaERdNi2jZ9rZmseRO6bO-PakzK5LhRn_SDSHj2OCH=w222-h227-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Mint",
    category: "leafy",
    rating: 4.1,
    discount: 10,
    price: 100,
    image:
      "https://lh3.googleusercontent.com/n3GO0kCtKo7P1Fap9iYjKHxrADcM3Ci78j6GN4-2-BKjg2GYsqN37s_0yX4euicCy-pZCMHDzn3j_Lq1K4ebqgkn5RMiDHjq1LASyXzNHbgSRD54ZDp039btJx9L54VfpHNb2FRy8IZLRbiinh_fb-BGPsUBzcB3b3JtsfgCKdTpPBmlnQqW6VST006uSUwkKwXn4jQsRlb0s4YDiQ98Z9KirXmjdWf4IU4Yewrp3C2EEf0HoxsSobr_MLLV7KT42BvfyvXa1G090dwWAzI1c1zIdQ6wWd6SalJX6hyjHfiJN2tAzwBVfhJzt7cxgCf8QxIC-G61keKAvLWpvQzkrAB1J11lFJKSKRL3A68avlx6jPOH7pZpTrcK-LAkktO4ZhWEkjJ-tQVWXb6kczVBZI_Bfiqr6gIl3xbleJT8YWjlYonSPt1EorlqyHRltKbABVSfK5Gs86p5YGdtqOjMAJwAK2GsHYmS893e6c_FQy_wvD8CjB2bUfn3oweEgyrXXR4GgVU6rvJ4egfzdRH5Z7-GTf5-n83HDzIGjGDbY4tGW3MxdPenaUJvQxK_pl4ZHnmimS2Q6uJRqcKZLLApD6_3VM3oONAnPSEOUSd2RwJL_O1wJTmjy87MHv2nkv8UIhRy4y5ynEyegZPHj_4n1HMx3sztQOUk8o-7A3yNYGoZbheu7qFai9gxD7ptOhx2UiIxIjsUErrgwnX6N6NLRI3D=s225-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Spinach",
    category: "leafy",
    rating: 2.1,
    discount: 10,
    price: 190,
    image:
      "https://lh3.googleusercontent.com/N0l-8LRlhyVJLRVFU0R1GEvPVPoG3VnKc25usJhqrrblcZc7RcRC6glHrpad0EMuL62-tX8jdbDEBjTTQ_kFVtalhOCz5Wb8octmgauYCopEjZybSgxP7o4VaM9ThPYuFSTIK9OJqqxaaYdyDCg7ogJkTYl2bpKQ4rvnXUNgOkLvl7UUmSvuIr8guYRbUvOeOP4cvGEyly1EfBm-cl_zBlHpAtEARHGq27lizYfbDywsBKyi9JLdOcWjp0c5Kmps3zooWX1Nw_irRys4Lr5dzV02m9nd4GrgnaGt2jHapSJWNbsDxdpLtxkAgg6aS9j2YHHdX0KbwlwTNph41png-8ozvkqu2cMO7qKsfjcMf6Mkp7i2KHtB3xNO_ZzzNY-KmyZB5YlchnLR7uZL2u_HpWroo2KS23hai-zijsuViRnLrlOMGOBFJTkhQD4wV538-3opK_vK32nG1ZWGbGFKMXA6oGja2QsLHmXrIrw5AoDO2aBCpm8hb4tfEEmHeIZNoej49hnreE6AXOxD_ipGCWCH3ViUqaKfGCXLymtsEPSoV7GwVkRF-DxjBUVRh_HHy9ovskgggD4z8YZtwg8kMV5mQqHd2kFDfPMlfaLv2w3eqts0fKfAm-WENdvgSxGW2Es_dPXNGuQy8HrTEFC6IkEswxb5UdLKLjUb88rEcgHj5W2BCBMOgJtD8-zGspK_BEz5xlu5oTABdmMaF93qTYvD=w223-h226-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Pumpkin",
    category: "marrow",
    rating: 4.3,
    discount: 20,
    price: 110,
    image:
      "https://lh3.googleusercontent.com/xI9y_9SCPOmECnKIm5fF3Z5HkWXRqAppQ4nzOCk8ia5t2rSyR1GJRNxqHbVjuzzEIEvJmiNkoG47n3j919nt-G-1qZuwigR7na2xIADq3rL7WnGq-RKhFmu2N7if-Q2SOceLD8y_LFALJGq9-U-XoQUfsbMY4ljDxCoA0znBAeJ1QRwXE6f-npltbejbsoCwIiM4ZcxkiVLaOG3VunDIc40VBz9crkLQu8Y515DAA4DwYNFtQMIga1SsgH1JUf6Op1xa3EtNhY4fq4iugEj4dnvL21KFNn5qu9TPbn69VUwO9OU4blEvmc9Ny84zdCHGBXOuBn_dwl-jK9qeXTkUMKnFxip8rqw15T7HMwg_RHfdqfUDHKiEQETGyHkVjuOQtAHhxW61EhwmnnqqXZReUdnZPSJdRc8_OYpTxXUoX3_QNI37QaCzub1tANJU1gNBwMgynqLFb-IAOtrLm8KDu4bwt3XABjI5gYK0FZEZvspRn1Qu_ACPDXsWhOAHnVPrKCgI7VQqwo2cheW_4FjwWvn49GFFJjQt30oKY7Cb-FGBV8lbM9rLfEiG_1W7iNz_3fEp7f9ePhA2r0oebUVZKbEdq03fJiXF_UVeL4vvJlvLBmh0PMbk3J1bBC3ubV6HZ8lqwuHGERteqK8Anp3uR9uIyq6fazFQBdQ8If9df3xqG6VuMJeABIeikT6_Cme1w52BK5puwIcYYtnGDapWrsZE=w234-h216-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Cucumber",
    category: "marrow",
    rating: 4.8,
    discount: 10,
    price: 170,
    image:
      "https://lh3.googleusercontent.com/jwcAAnZsa2KqmNeVpJhVPcMNLNxtFP2uUZnkqCgzdIreM35b7NOPqLjG2tOkptl2HTi1X3P29KlI5i31-OHa8uM2lMnovXhakUQ1s1w1L3wfNYz_SEGm7AzRbLMBrvQ-QrTF7tUItzm2UrXtbyfIYXjnypk9QniUph4PL0ww1xZka4V0RLMokDDOVkXw_4KC4cX2P21-tgzEYXu925FNYzTlcN8Vttv9n1LuBfk0BQBJcHttqcJxBjFGMcE45bmCrZS0c1JXAIF8WpiIiEiRmhl651PnTt8ExCgDJUG0O0m2oI4RHslJcMS3OYukk6bMO5SgGhqfUX14X62yleq5Tg_BJfxNLl07LzmXL1bhbUb734NCDSlS49ixxyaVYco4_XaeCftanRFgNEnCDtVbZcG5LAIby1AFS1fP4UzyZ2ZdUAHpsbC5gHzChnWz5PhkwwrYot2bFlpIVLIr5CeY-yymPE2fmbtEOKeJb4K7w5w55oIgK4r0vbMqOqSrI4BdUn39VsvrpPTxcz_d5QCCb88HCh0AQNmIhLG6hZa1Uu_-g8Eo37nxzyiWS5KRFb39QFvvm4hMHT1doOKA3kHDFAXM_7Iru9uS2cMfdWB8wjAH4uTirjNdKM8wmyQHnW0dZ6Gtylja-_0RAu25Bj2ny0AurHABsQZkTEzaBP7LHSq7VI6ZDdUOnUekUWdmyIy4pd8YY8wkf_UoEf5Lu1nbpxl0=s225-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Beetroot",
    category: "root",
    rating: 1.5,
    discount: 30,
    price: 120,
    image:
      "https://lh3.googleusercontent.com/NtZ4ArFmsthESy1cZMoV28IZyv9v9yLC-rZH8RBAzojpHeObCibUXYHcy2OBY2e74bbeI7I81M7ctTSpwJnh6PU_FB--RwlYePKFwdRls7bNIdEFeFlGyG6paOfS7PhM0vkbUSR5fzgHp_ROHyBEoqH334SreKrTcxPZzcjRvOOyElu1x2yyZabqQNQCgX9Wy7H9EYdeEUxJGK45SXS4Ri6ZaWoa3u9MdPwI5eFPajJMhotc-cyWh9MtV_e50Oizjcd9ovKwM23DP7bsbr8grXFllIcmNz5VopV0HxEBZUnpPXPqWPDztf2j6EtJOorY3v-m-fMC-PSB6466M2rx4rCcx9x_ef6Mz354Yrm-JOwFeTVvqBILtQI44hSWpp-s1tlRMPCWc_oQyy_tqbiwxTFn4iX6emADFQy-xBQcUtxYqzYBuLVDWuGRBCD-fcSx9N6TzdamqHyIweCVnwhGXNUTQL183DeWf6bXsFQaV7vsZZk_4SJrTUA0QY7GVLsuSTHifsRNIinxkVIEbmYi4pLmDKp6FHB9zs0CK7QrnjBSolIdBMe10hJJ6Hkur2Y6Wc5k6tRJCkLZ0NxZoRRjLWRptqSsDeL8WpfQ4Db7wXHr8pbTDQdsZz0pPypNCc2eK-9CRH-mTixKkF2Kr1_pJCDwNIrnel1_NbrFhwNOaHhyAoLiFYpADE_RtXclozsg_7q3b5VDKu0bToxh687LjZQn=w233-h216-no?authuser=0",
    quantity: 0,
  },
  {
    _id: uuid(),
    title: "Strawberry",
    category: "fruit",
    rating: 4.2,
    discount: 20,
    price: 190,
    image:
      "https://lh3.googleusercontent.com/3lVHDPkumpzgZoIVdv4hwYRBVOt6yJT1kny5R4fgGVhZYdYZOZA46Y0L41sfk5SdpFoderZ8z9Jil7ONrVE61BrMZxxu7Nz88pBxb1QtTkRsJahfG5Uz4mxC6gz76ti2qOU4mYUK16GCAszsyoopvjvT-1t84R7IiW9jp33FZ-mh5AymzdUBrKGdJBI6bq5DsvY90sOyNplid2vkH98SEI2svoFgVfs27yoR57iWDfOS_o47QlFkfQICyYLOmKTIXdEdRgOu5efTcw-y0CPqpLxXDdm4f5_ymzP7XNibV1yYqe_APQmxb8UKCUZbee82VpkKwvUa3KRTebgdqKDrna2PN7_N5u5rk3WW2embJjJtiL13ryO2XzlcZCnHqsjgIQ1QKmHESZwnqIbLQV_mBnd6Nd2Jo_zemvMHAiYY--m6tK2HUP6giNV-OOyTz5LdcQdsr3ea9IAIRH9crZhU76zq2Cs4fzaCsg96C-vX-2dLD8jHhra_CeSrBHOM1Gv5nrxu5_pKUdZDiEwU--ZYhRZCZWqWfwM6PSTw1Yyoi96cWGzU8i0eAqErz-axr5_hUY7S8pKl8-azZdZynvT0ZCR4siw-ip5QWXJuOXZWJv8xmTGY0T5ZayNzmHrAYs-0-uL4Y0WgjQ1m2sYnC1vUrUaiGY1LIz_XTh-bU3bs-3ckikw_v1nG8sd52YyKu6meSyGSmkbFBdcYc82JcWjjN-YR=s200-no?authuser=0",
    quantity: 0,
  },
];
