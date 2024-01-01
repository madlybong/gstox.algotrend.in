
import type { basicTable1, tableAction } from '@/types/components/table/index';
/*import tabler icons*/
import { PlusIcon, EditIcon, TrashIcon } from 'vue-tabler-icons';
// import img1 from '@/assets/images/profile/user-1.jpg';
// import img2 from '@/assets/images/profile/user-2.jpg';
// import img3 from '@/assets/images/profile/user-3.jpg';
// import img4 from '@/assets/images/profile/user-4.jpg';
// import img5 from '@/assets/images/profile/user-5.jpg';

/*Basic Table 1*/
// const basicTableData1: basicTable1[] = [
const basicTableData: any = [
    { "Build Up": "LU", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "4.1765", "Theta": "-4.6638", "Gamma": "0.0004", "Delta": "0.9193", "IV Chg": "-2.62", "IV": "13.4", "OI Chg": "-3900", "OI": "39300", "Volume": "98500", "Chg (Pts)": "-72.3", "LTP": "528", "VWAP": "548.2", "Bid": "524.1", "Ask": "558.85", "Strike Price": "21250", "BidP": "13.35", "AskP": "13.5", "VWAPP": "19.82", "LTPP": "13.8", "Chg (Pts)P": "-7.6", "VolumeP": "10925900", "OIP": "888800", "OI ChgP": "449150", "IVP": "13.4", "IV ChgP": "-1.65", "DeltaP": "-0.0807", "GammaP": "0.0004", "ThetaP": "-4.6638", "VegaP": "4.1765", "PCR-OIP": "22.62", "PCR-VolP": "110.92", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "4.9101", "Theta": "-5.4134", "Gamma": "0.0005", "Delta": "0.8996", "IV Chg": "0.02", "IV": "13.23", "OI Chg": "28000", "OI": "341950", "Volume": "486800", "Chg (Pts)": "-58.55", "LTP": "481.9", "VWAP": "494.85", "Bid": "480.35", "Ask": "482", "Strike Price": "21300", "BidP": "16.5", "AskP": "16.8", "VWAPP": "24.17", "LTPP": "17.05", "Chg (Pts)P": "-8.7", "VolumeP": "25271300", "OIP": "2881650", "OI ChgP": "737700", "IVP": "13.1", "IV ChgP": "-1.73", "DeltaP": "-0.0982", "GammaP": "0.0005", "ThetaP": "-5.2746", "VegaP": "4.8317", "PCR-OIP": "8.43", "PCR-VolP": "51.91", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "5.3612", "Theta": "-5.5756", "Gamma": "0.0006", "Delta": "0.8866", "IV Chg": "-1.52", "IV": "12.48", "OI Chg": "5700", "OI": "58050", "Volume": "106950", "Chg (Pts)": "-66.95", "LTP": "433.5", "VWAP": "446.6", "Bid": "433.3", "Ask": "440", "Strike Price": "21350", "BidP": "20.55", "AskP": "21.05", "VWAPP": "29.6", "LTPP": "21.05", "Chg (Pts)P": "-9.95", "VolumeP": "14389650", "OIP": "1022700", "OI ChgP": "514900", "IVP": "12.8", "IV ChgP": "-1.82", "DeltaP": "-0.1192", "GammaP": "0.0006", "ThetaP": "-5.9258", "VegaP": "5.5555", "PCR-OIP": "17.62", "PCR-VolP": "134.55", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "LU", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "6.4787", "Theta": "-6.8836", "Gamma": "0.0007", "Delta": "0.8509", "IV Chg": "-1.29", "IV": "12.75", "OI Chg": "-29650", "OI": "615350", "Volume": "1032950", "Chg (Pts)": "-66.15", "LTP": "391.85", "VWAP": "405.06", "Bid": "389.75", "Ask": "392.1", "Strike Price": "21400", "BidP": "26", "AskP": "26.45", "VWAPP": "36.35", "LTPP": "26.35", "Chg (Pts)P": "-11.45", "VolumeP": "33572750", "OIP": "2555900", "OI ChgP": "425000", "IVP": "12.55", "IV ChgP": "-1.94", "DeltaP": "-0.1453", "GammaP": "0.0007", "ThetaP": "-6.6607", "VegaP": "6.3688", "PCR-OIP": "4.15", "PCR-VolP": "32.5", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "LU", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "7.3556", "Theta": "-7.705", "Gamma": "0.0008", "Delta": "0.8187", "IV Chg": "-1.63", "IV": "12.57", "OI Chg": "-1200", "OI": "67350", "Volume": "322550", "Chg (Pts)": "-69", "LTP": "349", "VWAP": "363.11", "Bid": "345.05", "Ask": "349.2", "Strike Price": "21450", "BidP": "32.1", "AskP": "32.95", "VWAPP": "44.01", "LTPP": "32.15", "Chg (Pts)P": "-13.4", "VolumeP": "19406600", "OIP": "1094250", "OI ChgP": "392400", "IVP": "12.2", "IV ChgP": "-2.13", "DeltaP": "-0.1743", "GammaP": "0.0008", "ThetaP": "-7.2931", "VegaP": "7.1735", "PCR-OIP": "16.25", "PCR-VolP": "60.17", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "8.1569", "Theta": "-8.2929", "Gamma": "0.0009", "Delta": "0.7848", "IV Chg": "-2.16", "IV": "12.2", "OI Chg": "234350", "OI": "1292950", "Volume": "7829700", "Chg (Pts)": "-73.6", "LTP": "306.3", "VWAP": "324.41", "Bid": "304.9", "Ask": "306.3", "Strike Price": "21500", "BidP": "40.1", "AskP": "41", "VWAPP": "53.99", "LTPP": "40.35", "Chg (Pts)P": "-13.35", "VolumeP": "62907250", "OIP": "6227300", "OI ChgP": "2116100", "IVP": "11.99", "IV ChgP": "-2.07", "DeltaP": "-0.2112", "GammaP": "0.0009", "ThetaP": "-8.0628", "VegaP": "8.0695", "PCR-OIP": "4.82", "PCR-VolP": "8.03", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "8.9998", "Theta": "-8.9773", "Gamma": "0.001", "Delta": "0.7428", "IV Chg": "-1.85", "IV": "11.97", "OI Chg": "63050", "OI": "181100", "Volume": "1963350", "Chg (Pts)": "-70.7", "LTP": "266.3", "VWAP": "287.19", "Bid": "266.35", "Ask": "268", "Strike Price": "21550", "BidP": "51.35", "AskP": "52.05", "VWAPP": "65.24", "LTPP": "52.4", "Chg (Pts)P": "-12.6", "VolumeP": "29058400", "OIP": "1237400", "OI ChgP": "638000", "IVP": "12", "IV ChgP": "-1.97", "DeltaP": "-0.2577", "GammaP": "0.001", "ThetaP": "-9.0091", "VegaP": "9.0091", "PCR-OIP": "6.83", "PCR-VolP": "14.8", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "LU", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "9.7922", "Theta": "-9.6617", "Gamma": "0.0011", "Delta": "0.6937", "IV Chg": "-2.28", "IV": "11.84", "OI Chg": "-66050", "OI": "1208800", "Volume": "16028900", "Chg (Pts)": "-74.6", "LTP": "229.45", "VWAP": "251.05", "Bid": "229.25", "Ask": "230.75", "Strike Price": "21600", "BidP": "64.3", "AskP": "64.9", "VWAPP": "80.28", "LTPP": "64.55", "Chg (Pts)P": "-11.95", "VolumeP": "73485500", "OIP": "3567500", "OI ChgP": "756350", "IVP": "11.77", "IV ChgP": "-1.96", "DeltaP": "-0.3052", "GammaP": "0.0011", "ThetaP": "-9.5903", "VegaP": "9.7777", "PCR-OIP": "2.95", "PCR-VolP": "4.58", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "10.466", "Theta": "-10.4137", "Gamma": "0.0011", "Delta": "0.6373", "IV Chg": "-1.27", "IV": "11.94", "OI Chg": "320550", "OI": "685900", "Volume": "17738250", "Chg (Pts)": "-62.75", "LTP": "197.45", "VWAP": "216.21", "Bid": "195.7", "Ask": "197.4", "Strike Price": "21650", "BidP": "80.05", "AskP": "81.15", "VWAPP": "97", "LTPP": "80.2", "Chg (Pts)P": "-11.8", "VolumeP": "54318600", "OIP": "1313200", "OI ChgP": "632350", "IVP": "11.65", "IV ChgP": "-2.04", "DeltaP": "-0.3595", "GammaP": "0.0012", "ThetaP": "-10.1306", "VegaP": "10.4349", "PCR-OIP": "1.91", "PCR-VolP": "3.06", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "10.9006", "Theta": "-10.5917", "Gamma": "0.0012", "Delta": "0.5812", "IV Chg": "-1.71", "IV": "11.66", "OI Chg": "1344200", "OI": "3413000", "Volume": "110082600", "Chg (Pts)": "-65.8", "LTP": "164.2", "VWAP": "186.26", "Bid": "163.75", "Ask": "165.4", "Strike Price": "21700", "BidP": "99", "AskP": "99.55", "VWAPP": "115.99", "LTPP": "100", "Chg (Pts)P": "-6.5", "VolumeP": "156109850", "OIP": "4485600", "OI ChgP": "2055150", "IVP": "11.66", "IV ChgP": "-1.71", "DeltaP": "-0.4188", "GammaP": "0.0012", "ThetaP": "-10.5917", "VegaP": "10.9006", "PCR-OIP": "1.31", "PCR-VolP": "1.42", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "11.1177", "Theta": "-10.8027", "Gamma": "0.0012", "Delta": "0.5204", "IV Chg": "-1.83", "IV": "11.66", "OI Chg": "1128000", "OI": "2110900", "Volume": "73121750", "Chg (Pts)": "-64.75", "LTP": "137", "VWAP": "159.1", "Bid": "136.05", "Ask": "136.95", "Strike Price": "21750", "BidP": "119.35", "AskP": "121", "VWAPP": "136.4", "LTPP": "119.55", "Chg (Pts)P": "-6.95", "VolumeP": "77499550", "OIP": "1669700", "OI ChgP": "750750", "IVP": "11.37", "IV ChgP": "-1.97", "DeltaP": "-0.4792", "GammaP": "0.0013", "ThetaP": "-10.5335", "VegaP": "11.1171", "PCR-OIP": "0.79", "PCR-VolP": "1.06", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "11.0721", "Theta": "-10.6107", "Gamma": "0.0012", "Delta": "0.4585", "IV Chg": "-1.69", "IV": "11.5", "OI Chg": "1648900", "OI": "4663750", "Volume": "101283400", "Chg (Pts)": "-60", "LTP": "111", "VWAP": "132.36", "Bid": "110.1", "Ask": "111.35", "Strike Price": "21800", "BidP": "144.05", "AskP": "146.05", "VWAPP": "159.96", "LTPP": "145.6", "Chg (Pts)P": "-2.4", "VolumeP": "76022300", "OIP": "2293600", "OI ChgP": "83250", "IVP": "11.39", "IV ChgP": "-1.84", "DeltaP": "-0.5419", "GammaP": "0.0012", "ThetaP": "-10.508", "VegaP": "11.0707", "PCR-OIP": "0.49", "PCR-VolP": "0.75", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "10.765", "Theta": "-10.3344", "Gamma": "0.0012", "Delta": "0.3978", "IV Chg": "-1.73", "IV": "11.52", "OI Chg": "614500", "OI": "1640150", "Volume": "43230650", "Chg (Pts)": "-56.85", "LTP": "90.15", "VWAP": "108.73", "Bid": "88.65", "Ask": "90.2", "Strike Price": "21850", "BidP": "172.05", "AskP": "174.5", "VWAPP": "186.72", "LTPP": "174.6", "Chg (Pts)P": "-2.4", "VolumeP": "14763600", "OIP": "532400", "OI ChgP": "36600", "IVP": "11.4", "IV ChgP": "-2.15", "DeltaP": "-0.6033", "GammaP": "0.0012", "ThetaP": "-10.2191", "VegaP": "10.757", "PCR-OIP": "0.32", "PCR-VolP": "0.34", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bullish", "Build UpP": "SB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "10.1966", "Theta": "-9.6698", "Gamma": "0.0012", "Delta": "0.3376", "IV Chg": "-1.82", "IV": "11.38", "OI Chg": "1181450", "OI": "3301300", "Volume": "77945150", "Chg (Pts)": "-53.45", "LTP": "70.6", "VWAP": "88.9", "Bid": "70.6", "Ask": "71", "Strike Price": "21900", "BidP": "204", "AskP": "205.7", "VWAPP": "216.45", "LTPP": "204", "Chg (Pts)P": "3.95", "VolumeP": "19572900", "OIP": "677000", "OI ChgP": "62850", "IVP": "11.15", "IV ChgP": "-2", "DeltaP": "-0.6657", "GammaP": "0.0012", "ThetaP": "-9.4385", "VegaP": "10.1581", "PCR-OIP": "0.21", "PCR-VolP": "0.25", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "LB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "9.4342", "Theta": "-8.9468", "Gamma": "0.0011", "Delta": "0.2825", "IV Chg": "-1.54", "IV": "11.38", "OI Chg": "346100", "OI": "1286500", "Volume": "32498550", "Chg (Pts)": "-45.65", "LTP": "55.35", "VWAP": "71.44", "Bid": "55", "Ask": "55.25", "Strike Price": "21950", "BidP": "236.8", "AskP": "240.85", "VWAPP": "247.08", "LTPP": "238.05", "Chg (Pts)P": "10", "VolumeP": "2931100", "OIP": "209900", "OI ChgP": "-32000", "IVP": "11.05", "IV ChgP": "-1.91", "DeltaP": "-0.7234", "GammaP": "0.0011", "ThetaP": "-8.5985", "VegaP": "9.3377", "PCR-OIP": "0.16", "PCR-VolP": "0.09", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "SC" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "8.5081", "Theta": "-8.0473", "Gamma": "0.001", "Delta": "0.2317", "IV Chg": "-1.9", "IV": "11.35", "OI Chg": "2851200", "OI": "6626500", "Volume": "77588200", "Chg (Pts)": "-44.9", "LTP": "42.45", "VWAP": "56.52", "Bid": "41.75", "Ask": "42.45", "Strike Price": "22000", "BidP": "273.75", "AskP": "277.7", "VWAPP": "283.61", "LTPP": "277.6", "Chg (Pts)P": "16.15", "VolumeP": "10251500", "OIP": "1041700", "OI ChgP": "349800", "IVP": "11.27", "IV ChgP": "-1.76", "DeltaP": "-0.7699", "GammaP": "0.001", "ThetaP": "-7.9594", "VegaP": "8.475", "PCR-OIP": "0.16", "PCR-VolP": "0.13", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "LB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "7.5232", "Theta": "-7.147", "Gamma": "0.0008", "Delta": "0.188", "IV Chg": "-1.79", "IV": "11.4", "OI Chg": "1326900", "OI": "1974350", "Volume": "23996900", "Chg (Pts)": "-38.9", "LTP": "32.6", "VWAP": "44.42", "Bid": "31.75", "Ask": "32.6", "Strike Price": "22050", "BidP": "314", "AskP": "317.8", "VWAPP": "321.53", "LTPP": "316.85", "Chg (Pts)P": "26.35", "VolumeP": "850700", "OIP": "228200", "OI ChgP": "88900", "IVP": "11.19", "IV ChgP": "-1.27", "DeltaP": "-0.8165", "GammaP": "0.0009", "ThetaP": "-6.9103", "VegaP": "7.4105", "PCR-OIP": "0.12", "PCR-VolP": "0.04", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "LB" },
    { "Build Up": "LU", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "6.4991", "Theta": "-6.1904", "Gamma": "0.0007", "Delta": "0.1498", "IV Chg": "-1.69", "IV": "11.43", "OI Chg": "-182050", "OI": "2874400", "Volume": "44369250", "Chg (Pts)": "-33.05", "LTP": "24.6", "VWAP": "34.72", "Bid": "24.55", "Ask": "24.95", "Strike Price": "22100", "BidP": "358.05", "AskP": "360.15", "VWAPP": "360.83", "LTPP": "359.45", "Chg (Pts)P": "28.25", "VolumeP": "1019550", "OIP": "345750", "OI ChgP": "236550", "IVP": "11.29", "IV ChgP": "-1.51", "DeltaP": "-0.8533", "GammaP": "0.0007", "ThetaP": "-6.0319", "VegaP": "6.4112", "PCR-OIP": "0.12", "PCR-VolP": "0.02", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "LB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "5.5547", "Theta": "-5.3464", "Gamma": "0.0006", "Delta": "0.1192", "IV Chg": "-1.72", "IV": "11.55", "OI Chg": "766550", "OI": "1215850", "Volume": "23919000", "Chg (Pts)": "-29.1", "LTP": "18.75", "VWAP": "26.65", "Bid": "18.25", "Ask": "18.8", "Strike Price": "22150", "BidP": "389.95", "AskP": "404.8", "VWAPP": "402.95", "LTPP": "400.55", "Chg (Pts)P": "26.35", "VolumeP": "82850", "OIP": "45850", "OI ChgP": "-1350", "IVP": "10.79", "IV ChgP": "-2.46", "DeltaP": "-0.8967", "GammaP": "0.0006", "ThetaP": "-4.5073", "VegaP": "5.0128", "PCR-OIP": "0.04", "PCR-VolP": "0", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "SC" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "4.7223", "Theta": "-4.6199", "Gamma": "0.0005", "Delta": "0.0952", "IV Chg": "-1.23", "IV": "11.74", "OI Chg": "1499950", "OI": "3640600", "Volume": "43690200", "Chg (Pts)": "-21.55", "LTP": "14.5", "VWAP": "20.7", "Bid": "14.1", "Ask": "14.5", "Strike Price": "22200", "BidP": "446.05", "AskP": "450.35", "VWAPP": "447.63", "LTPP": "447.7", "Chg (Pts)P": "82.7", "VolumeP": "269950", "OIP": "109450", "OI ChgP": "47850", "IVP": "11.16", "IV ChgP": "-", "DeltaP": "-0.916", "GammaP": "0.0005", "ThetaP": "-4.0037", "VegaP": "4.305", "PCR-OIP": "0.03", "PCR-VolP": "0.01", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "LB" },
    { "Build Up": "SB", "Trend": "Bearish", "Time": "29-Dec-2023 15:30:00", "Vega": "3.8256", "Theta": "-3.7363", "Gamma": "0.0004", "Delta": "0.0719", "IV Chg": "-1.5", "IV": "11.72", "OI Chg": "862950", "OI": "1353700", "Volume": "20406350", "Chg (Pts)": "-19.7", "LTP": "10.4", "VWAP": "15.92", "Bid": "10.25", "Ask": "10.4", "Strike Price": "22250", "BidP": "491.2", "AskP": "519.85", "VWAPP": "493", "LTPP": "492.2", "Chg (Pts)P": "35.3", "VolumeP": "53150", "OIP": "14900", "OI ChgP": "-4750", "IVP": "10.55", "IV ChgP": "-2.71", "DeltaP": "-0.9479", "GammaP": "0.0004", "ThetaP": "-2.6125", "VegaP": "2.9715", "PCR-OIP": "0.01", "PCR-VolP": "0", "TimeP": "29-Dec-2023 15:30:00", "TrendP": "Bearish", "Build UpP": "SC" },
    // { "Build Up": "", "Trend": "", "Time": "", "Vega": "", "Theta": "", "Gamma": "", "Delta": "", "IV Chg": "", "IV": "", "OI Chg": "Total CE OI Chg", "OI": "Total CE OI", "Volume": "Total CE Volume", "Chg (Pts)": "", "LTP": "", "VWAP": "", "Bid": "", "Ask": "", "Strike Price": "PE-CE OI Chg", "BidP": "", "AskP": "", "VWAPP": "", "LTPP": "", "Chg (Pts)P": "", "VolumeP": "Total PE Volume", "OIP": "Total PE OI", "OI ChgP": "Total PE OI Chg", "IVP": "", "IV ChgP": "", "DeltaP": "", "GammaP": "", "ThetaP": "", "VegaP": "", "PCR-OIP": "", "PCR-VolP": "", "TimeP": "", "TrendP": "", "Build UpP": "" },
    // { "Build Up": "", "Trend": "", "Time": "", "Vega": "", "Theta": "", "Gamma": "", "Delta": "", "IV Chg": "", "IV": "", "OI Chg": 13939500, "OI": 38591750, "Volume": 717739950, "Chg (Pts)": "", "LTP": "", "VWAP": "", "Bid": "", "Ask": "", "Strike Price": -3603950, "BidP": "", "AskP": "", "VWAPP": "", "LTPP": "", "Chg (Pts)P": "", "VolumeP": 682762950, "OIP": 32442750, "OI ChgP": 10335550, "IVP": "", "IV ChgP": "", "DeltaP": "", "GammaP": "", "ThetaP": "", "VegaP": "", "PCR-OIP": "", "PCR-VolP": "", "TimeP": "", "TrendP": "", "Build UpP": "" }
]
// [
// {
//     avatar: img1,
//     name: 'Sunil Joshi',
//     post: 'Web Designer',
//     pname: 'Elite Admin',
//     status: 'Active',
//     statuscolor: 'success',
//     teams: [
//         {
//             id: '1',
//             color: 'error',
//             text: 'S'
//         },
//         {
//             id: '2',
//             color: 'secondary   ',
//             text: 'D'
//         }
//     ],
//     budget: 3.9
// },
// {
//     avatar: img2,
//     name: 'Andrew McDownland',
//     post: 'Project Manager',
//     pname: 'Real Homes WP Theme',
//     status: 'Pending',
//     statuscolor: 'warning',
//     teams: [
//         {
//             id: '1',
//             color: 'secondary',
//             text: 'N'
//         },
//         {
//             id: '2',
//             color: 'warning   ',
//             text: 'X'
//         },
//         {
//             id: '3',
//             color: 'primary   ',
//             text: 'A'
//         }
//     ],
//     budget: 24.5
// },
// {
//     avatar: img3,
//     name: 'Christopher Jamil',
//     post: 'Project Manager',
//     pname: 'MedicalPro WP Theme',
//     status: 'Completed',
//     statuscolor: 'primary',
//     teams: [
//         {
//             id: '1',
//             color: 'secondary',
//             text: 'X'
//         }
//     ],
//     budget: 12.8
// },
// {
//     avatar: img4,
//     name: 'Nirav Joshi',
//     post: 'Frontend Engineer',
//     pname: 'Hosting Press HTML',
//     status: 'Active',
//     statuscolor: 'success',
//     teams: [
//         {
//             id: '1',
//             color: 'primary',
//             text: 'X'
//         },
//         {
//             id: '2',
//             color: 'error',
//             text: 'Y'
//         }
//     ],
//     budget: 2.4
// },
// {
//     avatar: img5,
//     name: 'Micheal Doe',
//     post: 'Content Writer',
//     pname: 'Helping Hands WP Theme',
//     status: 'Cancel',
//     statuscolor: 'error',
//     teams: [
//         {
//             id: '1',
//             color: 'secondary',
//             text: 'S'
//         }
//     ],
//     budget: 9.3
// }
// ];

/*Table Action*/
const tableActionData: tableAction[] = [
    {
        icon: PlusIcon,
        listtitle: 'Add'
    },
    {
        icon: EditIcon,
        listtitle: 'Edit'
    },
    {
        icon: TrashIcon,
        listtitle: 'Delete'
    }
]
export { basicTableData, tableActionData };
