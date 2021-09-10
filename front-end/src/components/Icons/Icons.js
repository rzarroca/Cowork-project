import cn from 'classnames';

export const ListIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      className={cn('generic-icon', className)}
    >
      <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z" />
    </svg>
  );
};

export const InfoIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
    </svg>
  );
};
export const IncidentsIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z" />
      <path d="M11 6h2v8h-2zm0 10h2v2h-2z" />
    </svg>
  );
};
export const CleaningIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 83 82"
      className={cn('generic-icon', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M67.4375 51.25H51.875V46.125H67.4375V51.25Z" />
      <path d="M77.8125 71.75H62.25V66.625H77.8125V71.75Z" />
      <path d="M72.625 61.5H57.0625V56.375H72.625V61.5Z" />
      <path d="M44.102 51.25C44.0838 49.0878 43.5 46.967 42.4075 45.0934C41.315 43.2197 39.7508 41.657 37.8667 40.5567L57.063 7.6875L52.5758 5.125L32.923 38.7604C30.511 38.2281 28.0025 38.3017 25.6268 38.9745C23.2511 39.6473 21.0841 40.8979 19.3239 42.6118C9.61294 51.865 10.3651 73.4976 10.4014 74.415C10.4283 75.0767 10.7133 75.7024 11.1969 76.1611C11.6804 76.6197 12.3249 76.8755 12.9952 76.875H51.8781C52.4225 76.875 52.9531 76.7058 53.3947 76.3913C53.8363 76.0768 54.1666 75.6331 54.3387 75.1228C54.5109 74.6126 54.5162 74.0618 54.3539 73.5484C54.1915 73.0351 53.8699 72.5852 53.4343 72.2625C44.2525 65.4565 44.102 51.3884 44.102 51.25ZM30.9439 43.5548C33.0199 43.5773 35.0072 44.3898 36.4922 45.8231C37.9773 47.2563 38.8458 49.2001 38.9171 51.25C38.9171 51.3474 38.9223 51.783 38.9612 52.4518L23.6581 45.7278C24.6661 44.9066 25.8294 44.2916 27.0802 43.9185C28.331 43.5455 29.6443 43.4218 30.9439 43.5548ZM40.0739 71.75C38.0007 69.6644 36.6792 66.9632 36.313 64.0625H31.1255C31.3113 66.7897 32.1735 69.4298 33.6363 71.75H27.8703C26.8037 68.4244 26.1547 64.982 25.938 61.5H20.7505C20.9178 64.9715 21.4967 68.4117 22.4753 71.75H15.563C15.6434 67.0452 16.3152 56.6518 20.2395 49.8329L39.7783 58.4173C40.717 63.233 42.7184 67.7852 45.6401 71.75H40.0739Z" />
    </svg>
  );
};
export const ScoresIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
    </svg>
  );
};
export const FilterIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z" />
    </svg>
  );
};

export const StarIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
    </svg>
  );
};
export const ResetIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
      <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
    </svg>
  );
};
export const MapIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2z" />
      <path d="m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z" />
    </svg>
  );
};
export const PresentationIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" />
    </svg>
  );
};
export const FullStartIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('star-icon', className)}
    >
      <path d="M21.947,9.179c-0.129-0.378-0.47-0.645-0.868-0.676L15.378,8.05l-2.467-5.461C12.75,2.23,12.393,2,12,2	s-0.75,0.23-0.911,0.588L8.622,8.05L2.921,8.503C2.53,8.534,2.193,8.791,2.06,9.16s-0.039,0.782,0.242,1.056l4.213,4.107	l-1.49,6.452c-0.092,0.399,0.069,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22c0.193,0,0.387-0.056,0.555-0.168L12,18.202	l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082l-1.829-6.4l4.536-4.082	C21.966,9.976,22.075,9.558,21.947,9.179z" />
    </svg>
  );
};
export const HalfStartIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('star-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M5.025,20.775c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22c0.193,0,0.387-0.056,0.555-0.168L12,18.202 l5.445,3.63c0.348,0.232,0.804,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082l-1.829-6.4l4.536-4.082 c0.297-0.267,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.645-0.868-0.676L15.378,8.05l-2.467-5.461C12.75,2.23,12.393,2,12,2 s-0.75,0.23-0.911,0.588L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16c-0.134,0.369-0.038,0.782,0.242,1.056 l4.214,4.107L5.025,20.775z M12,5.429l2.042,4.521l0.588,0.047c0.001,0,0.001,0,0.001,0l3.972,0.315l-3.271,2.944 c-0.001,0.001-0.001,0.001-0.001,0.002l-0.463,0.416l0.171,0.597c0,0,0,0.002,0,0.003l1.253,4.385L12,15.798V5.429z" />
    </svg>
  );
};
export const EmptyStartIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('star-icon', className)}
    >
      <path d="M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z M9.369,9.997c0.363-0.029,0.683-0.253,0.832-0.586L12,5.43l1.799,3.981 c0.149,0.333,0.469,0.557,0.832,0.586l3.972,0.315l-3.271,2.944c-0.284,0.256-0.397,0.65-0.293,1.018l1.253,4.385l-3.736-2.491 c-0.336-0.225-0.773-0.225-1.109,0l-3.904,2.603l1.05-4.546c0.078-0.34-0.026-0.697-0.276-0.94l-3.038-2.962L9.369,9.997z" />
    </svg>
  );
};
export const NewSpaceIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path>
    </svg>
  );
};
export const NewCenterIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path>
      <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path>
    </svg>
  );
};

export const NoMatchSVG = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4000 2700"
      width="4000"
      height="2700"
      fill="none"
      className={cn('generic-icon', className)}
    >
      <g clip-Path="url(#clip0)">
        <path
          d="M2027.7 1898.55C1855.51 1898.55 1698.61 1833.03 1580.59 1725.56C1695.11 1819.25 1841.5 1875.49 2001.01 1875.49C2367.87 1875.49 2665.29 1578.07 2665.29 1211.19C2665.29 1197.87 2664.91 1184.61 2664.13 1171.48L2687.94 1160.48C2690.63 1184.69 2692 1209.32 2692 1234.24C2692 1601.12 2394.59 1898.55 2027.7 1898.55ZM2588.55 900.96C2552.45 832.677 2504.75 771.445 2448.13 719.887C2508.27 769.117 2559.65 828.715 2599.5 895.908L2588.55 900.96"
          fill="#C2D2E2"
        />
        <path
          d="M2664.29 1211.19C2664.29 1578.07 2366.87 1875.49 2000 1875.49C1633.12 1875.49 1335.7 1578.07 1335.7 1211.19C1335.7 844.314 1633.12 546.895 2000 546.895C2366.87 546.895 2664.29 844.314 2664.29 1211.19Z"
          fill="#F0F7FC"
          fill-opacity="0.8"
        />
        <path
          d="M552.716 1805.17C372.743 1805.17 251.58 1655.69 194.901 1565.52C160.245 1510.39 132.494 1452.2 109.921 1402.55C105.752 1393.37 101.725 1383.6 97.8312 1374.15C81.6604 1334.89 64.9375 1294.29 31.95 1277.67C21.1771 1272.23 10.637 1269.55 0 1269.13V1219C17.5708 1219.39 35.7708 1223.53 54.4901 1232.97C104.107 1258 125.359 1309.57 144.105 1355.08C148.004 1364.55 151.684 1373.48 155.483 1381.83C177.367 1429.96 204.197 1486.27 237.272 1538.88C354.355 1725.17 483.035 1755.12 553.596 1755.12C556 1755.12 558.349 1755.08 560.616 1755.01C721.301 1750.43 886.969 1680.76 1034.26 1617.36L1023.9 1593L1082.85 1567.93L1066.22 1528.83C1060.62 1515.65 1066.75 1500.43 1079.92 1494.81L1109.89 1565.29L1147.66 1654.13C1151.86 1664.01 1161.46 1669.93 1171.55 1669.93C1174.94 1669.93 1178.38 1669.27 1181.69 1667.87L1359.27 1592.36L1361.12 1596.75C1362.76 1600.59 1366.51 1602.91 1370.43 1602.91C1371.75 1602.91 1373.09 1602.64 1374.39 1602.09L1404.6 1589.25C1409.73 1587.07 1412.12 1581.13 1409.95 1575.99L1408.08 1571.61L1422.36 1565.55L1424.21 1569.92C1425.85 1573.77 1429.59 1576.08 1433.52 1576.08C1434.84 1576.08 1436.19 1575.81 1437.48 1575.27L1442.79 1573.01C1450.09 1584.24 1457.73 1595.23 1465.68 1605.97C1464.71 1608.31 1462.84 1610.28 1460.33 1611.35L1430.12 1624.19C1428.83 1624.73 1427.48 1625 1426.16 1625C1422.24 1625 1418.49 1622.69 1416.85 1618.84L1415 1614.47L1400.72 1620.53L1402.59 1624.92C1404.77 1630.05 1402.37 1635.99 1397.24 1638.17L1367.03 1651.01C1365.73 1651.56 1364.39 1651.83 1363.08 1651.83C1359.15 1651.83 1355.4 1649.52 1353.77 1645.67L1351.91 1641.29L1174.33 1716.79C1171.02 1718.2 1167.58 1718.87 1164.19 1718.87C1154.09 1718.87 1144.5 1712.93 1140.3 1703.05L1123.24 1662.93L1064.29 1688L1053.84 1663.41C902.477 1728.57 732.093 1800.19 562.047 1805.04C558.916 1805.13 555.812 1805.17 552.716 1805.17Z"
          fill="#C2D2E2"
        />
        <path
          d="M1465.68 1605.97C1457.73 1595.23 1450.09 1584.24 1442.79 1573.01L1467.69 1562.43C1472.83 1560.24 1475.21 1554.31 1473.04 1549.16L1471.17 1544.79L1496.36 1534.08C1509.56 1528.47 1515.71 1513.23 1510.09 1500.04L1455.81 1372.37L1563.04 1326.79L1630.51 1485.45L1499.43 1541.19L1502.73 1548.96C1508.35 1562.16 1502.2 1577.39 1489.01 1583L1463.81 1593.71L1465.68 1598.09C1466.79 1600.71 1466.71 1603.55 1465.68 1605.97Z"
          fill="#B8CDE0"
        />
        <path
          d="M1424.21 1569.92C1426.4 1575.05 1432.33 1577.45 1437.48 1575.27L1467.69 1562.43C1472.83 1560.24 1475.21 1554.31 1473.04 1549.16L1471.17 1544.79L1496.36 1534.08C1509.56 1528.47 1515.71 1513.23 1510.09 1500.04L1436.01 1325.81C1430.41 1312.61 1415.17 1306.48 1401.99 1312.08L1376.79 1322.79L1374.93 1318.41C1372.75 1313.28 1366.81 1310.88 1361.67 1313.07L1331.46 1325.91C1326.32 1328.09 1323.93 1334.03 1326.11 1339.17L1327.97 1343.55L1313.7 1349.61L1311.83 1345.24C1309.65 1340.11 1303.72 1337.71 1298.58 1339.89L1268.37 1352.73C1263.23 1354.92 1260.84 1360.85 1263.02 1365.99L1264.88 1370.37L1087.31 1445.87C1074.12 1451.48 1067.97 1466.72 1073.58 1479.91L1147.66 1654.13C1153.26 1667.32 1168.5 1673.47 1181.69 1667.87L1359.27 1592.36L1361.12 1596.75C1363.31 1601.88 1369.24 1604.28 1374.39 1602.09L1404.6 1589.25C1409.73 1587.07 1412.12 1581.13 1409.95 1575.99L1408.08 1571.61L1422.36 1565.55L1424.21 1569.92Z"
          fill="#E2F0FE"
        />
        <path
          d="M1109.89 1565.29L1073.58 1479.91C1072.18 1476.6 1071.51 1473.17 1071.51 1469.81C1071.49 1459.69 1077.42 1450.08 1087.31 1445.87L1264.88 1370.37L1263.02 1365.99C1262.47 1364.71 1262.21 1363.37 1262.21 1362.07C1262.2 1358.12 1264.51 1354.37 1268.37 1352.73L1298.58 1339.89C1299.87 1339.35 1301.21 1339.08 1302.53 1339.08C1306.46 1339.08 1310.2 1341.39 1311.83 1345.24L1313.7 1349.61L1327.97 1343.55L1326.11 1339.17C1325.57 1337.88 1325.31 1336.55 1325.3 1335.24C1325.3 1331.29 1327.61 1327.55 1331.46 1325.91L1361.67 1313.07C1362.96 1312.52 1364.31 1312.25 1365.63 1312.25C1369.56 1312.25 1373.29 1314.56 1374.93 1318.41L1376.79 1322.79L1401.99 1312.08C1405.29 1310.68 1408.73 1310.01 1412.12 1310.01C1422.21 1310.01 1431.81 1315.93 1436.01 1325.81L1472.79 1412.31L1109.89 1565.29Z"
          fill="#D5E7FB"
        />
        <path
          d="M1506.79 1492.27L1439.32 1333.59L1570.4 1277.87L1637.87 1436.53L1506.79 1492.27Z"
          fill="#303841"
        />
        <path
          d="M1541.37 1327.95L1531.31 1304.24L1563.84 1290.41L1573.92 1314.11L1541.37 1327.95Z"
          fill="white"
        />
        <path
          d="M1558.2 1367.51L1548.12 1343.81L1580.67 1329.97L1590.73 1353.67L1558.2 1367.51Z"
          fill="white"
        />
        <path
          d="M1575.01 1407.07L1564.95 1383.37L1597.48 1369.53L1607.56 1393.24L1575.01 1407.07Z"
          fill="white"
        />
        <path
          d="M1591.84 1446.64L1581.76 1422.93L1614.31 1409.11L1624.37 1432.8L1591.84 1446.64Z"
          fill="white"
        />
        <path
          d="M1408.08 1571.61L1313.7 1349.61L1327.97 1343.55L1422.36 1565.55L1408.08 1571.61Z"
          fill="#303841"
        />
        <path
          d="M1065.49 1642.29L1025.11 1547.29L1088.55 1520.32L1128.94 1615.32L1065.49 1642.29Z"
          fill="#303841"
        />
        <path
          d="M-682.543 1292.97C-694.961 1276.12 -706.062 1257.85 -715.665 1238.28C-765.154 1137.44 -784.155 1033.69 -772.139 929.928C-761.576 838.741 -728.231 748.084 -670.201 652.822C-565.676 481.232 -403.068 332.086 -259.6 200.482C-238.332 180.985 -218.243 162.549 -198.62 144.312C-161.554 109.841 -119.896 69.0103 -94.6711 20.5262C-69.1066 -28.6038 -64.2859 -82.2228 -81.7749 -122.905C-97.2869 -159.015 -131.96 -190.885 -184.814 -217.653C-279.362 -265.524 -380.014 -285.716 -483.972 -277.649C-575.636 -270.527 -673.209 -241.208 -773.98 -190.471C-958.794 -97.4124 -1125.7 49.6628 -1278.54 194.734L-1389.26 299.852L-1423.72 263.542L-1312.99 158.441C-1157.37 10.7201 -987.096 -139.204 -796.486 -235.162C-689.876 -288.847 -586.03 -319.922 -487.845 -327.542C-374.612 -336.337 -265.052 -314.373 -162.204 -262.311C-98.6008 -230.093 -56.063 -189.858 -35.7936 -142.666C-12.0869 -87.507 -17.3651 -19.6093 -50.2712 43.6335C-79.1791 99.1906 -124.413 143.649 -164.541 180.969C-184.287 199.322 -204.438 217.808 -225.769 237.371C-366.787 366.722 -526.62 513.317 -627.456 678.862C-741.861 866.669 -756.016 1042.45 -670.735 1216.24C-628.112 1303.1 -551.261 1360.03 -465.165 1368.55C-369.719 1377.99 -281.765 1321.34 -196.705 1266.55C-180.552 1256.15 -163.848 1245.39 -147.626 1235.47C-141.612 1231.8 -135.513 1227.92 -129.328 1224C-78.476 1191.71 -15.1869 1151.52 55.6918 1187.27C105.309 1212.3 126.56 1263.87 145.307 1309.38C149.205 1318.84 152.886 1327.77 156.685 1336.12C178.569 1384.25 205.4 1440.56 238.473 1493.17C359.547 1685.81 493.034 1711.27 561.818 1709.31C726.813 1704.6 897.065 1631.27 1047.28 1566.56L1069.03 1557.2L1088.79 1603.18L1067.08 1612.52C912.741 1679 737.815 1754.35 563.249 1759.33C378.122 1764.63 253.757 1611.55 196.103 1519.81C161.448 1464.68 133.697 1406.49 111.123 1356.84C106.953 1347.67 102.927 1337.89 99.0323 1328.44C82.8621 1289.18 66.1395 1248.59 33.1527 1231.96C-9.18494 1210.61 -48.0479 1231.67 -102.505 1266.25C-108.93 1270.33 -115.271 1274.35 -121.525 1278.17C-137.244 1287.78 -152.964 1297.91 -169.606 1308.63C-257.576 1365.28 -357.286 1429.51 -470.089 1418.35C-553.804 1410.07 -629.898 1364.4 -682.543 1292.97Z"
          fill="#303841"
        />
        <path
          d="M4000 1345.16C3910.21 1292.47 3822.03 1208.82 3745.23 1135.93C3697.52 1090.68 3656.34 1051.59 3622.18 1026.81C3459.65 908.902 3310.48 850.47 3170.4 850.47C3124.51 850.47 3079.58 856.747 3035.48 869.262L3052.56 906.271L3001.79 929.704C3001.52 927.255 3000.88 924.801 2999.78 922.44L2960.49 837.309L3010.13 814.384L3025.42 847.481C3072.96 833.611 3121.3 826.656 3170.67 826.656C3315.63 826.656 3469.35 886.624 3636.12 1007.6C3671.53 1033.3 3713.25 1072.89 3761.57 1118.72C3833.96 1187.44 3916.73 1265.98 4000 1317.55V1345.16V1345.16ZM2686.94 1160.48C2684.59 1139.06 2681.2 1117.96 2676.83 1097.2L2988.39 953.39C2988.66 953.262 2988.93 953.13 2989.2 952.992L2996.73 969.336C3002.13 981.032 2997.03 994.889 2985.35 1000.29L2806.33 1082.92L2809.81 1090.47C2812.61 1096.52 2809.96 1103.69 2803.93 1106.49L2686.94 1160.48"
          fill="#C2D2E2"
        />
        <path
          d="M2663.14 1171.47C2661.85 1149.58 2659.51 1128.02 2656.15 1106.75L2676.85 1097.19C2681.2 1117.95 2684.6 1139.05 2686.96 1160.48L2663.14 1171.47Z"
          fill="#B8CBDE"
        />
        <path
          d="M2286.25 1232.73C2275.5 1232.73 2265.2 1226.6 2260.4 1216.2C2253.81 1201.94 2260.04 1185.04 2274.3 1178.46L2451.7 1096.06L2428.44 1045.6C2423.14 1034.18 2427.9 1020.7 2439.01 1015.05L2466.11 1073.77L2502.25 1152.09C2506.21 1160.62 2514.64 1165.65 2523.46 1165.65C2526.73 1165.65 2530.05 1164.96 2533.22 1163.5L2656.14 1106.75C2659.49 1128.02 2661.85 1149.59 2663.14 1171.48L2627.28 1188.03C2625.62 1188.79 2623.91 1189.14 2622.21 1189.14C2617.65 1189.14 2613.29 1186.54 2611.26 1182.13L2607.77 1174.58L2530.18 1210.39C2527.02 1211.86 2523.69 1212.55 2520.42 1212.55C2511.6 1212.55 2503.17 1207.52 2499.23 1198.99L2475.64 1147.9L2298.14 1230.1C2294.28 1231.89 2290.23 1232.73 2286.25 1232.73Z"
          fill="#B8CDE0"
        />
        <path
          d="M2928.96 769.054L2999.77 922.444C3005.18 934.138 3000.07 947.997 2988.38 953.393L2533.2 1163.5C2521.51 1168.9 2507.64 1163.8 2502.24 1152.1L2431.45 998.718C2426.04 987.024 2431.15 973.167 2442.84 967.767L2898.02 757.66C2909.71 752.258 2923.58 757.365 2928.96 769.054Z"
          fill="#E2F0FE"
        />
        <path
          d="M2466.11 1073.77L2431.46 998.709C2430.01 995.557 2429.31 992.248 2429.31 988.989C2429.3 980.159 2434.32 971.703 2442.85 967.759L2898.02 757.644C2901.21 756.189 2904.52 755.497 2907.79 755.497C2916.6 755.497 2925.04 760.519 2928.97 769.053L2965.82 848.857L2466.11 1073.77Z"
          fill="#D5E7FB"
        />
        <path
          d="M2715.54 832.732L2812.86 1043.56C2815.66 1049.62 2813.02 1056.79 2806.97 1059.58L2630.31 1141.13C2624.27 1143.92 2617.08 1141.28 2614.28 1135.23L2516.96 924.388C2514.18 918.342 2516.82 911.174 2522.87 908.375L2699.53 826.825C2705.57 824.026 2712.76 826.669 2715.54 832.732Z"
          fill="#303841"
        />
        <path
          d="M2791.08 1034.56C2793.1 1038.91 2791.2 1044.07 2786.85 1046.08L2633.33 1116.94C2628.96 1118.95 2623.8 1117.05 2621.82 1112.7V1112.7C2619.79 1108.35 2621.7 1103.19 2626.05 1101.18L2779.57 1030.32C2783.92 1028.31 2789.08 1030.21 2791.08 1034.56Z"
          fill="#E2F0FE"
        />
        <path
          d="M2774.53 998.681C2776.52 1003.03 2774.63 1008.19 2770.27 1010.2L2616.74 1081.07C2612.4 1083.07 2607.24 1081.17 2605.24 1076.82C2603.23 1072.47 2605.13 1067.31 2609.49 1065.3L2763 994.433C2767.34 992.423 2772.5 994.331 2774.53 998.681Z"
          fill="#E2F0FE"
        />
        <path
          d="M2757.94 962.8C2759.96 967.152 2758.06 972.316 2753.71 974.314L2600.19 1045.18C2595.84 1047.19 2590.69 1045.29 2588.67 1040.94C2586.68 1036.59 2588.55 1031.43 2592.91 1029.42L2746.45 958.55C2750.78 956.552 2755.95 958.449 2757.94 962.8Z"
          fill="#E2F0FE"
        />
        <path
          d="M2741.38 926.923C2743.4 931.265 2741.5 936.432 2737.14 938.435L2583.63 1009.31C2579.27 1011.31 2574.12 1009.41 2572.11 1005.05C2570.09 1000.71 2572 995.541 2576.34 993.539L2729.87 922.682C2734.23 920.662 2739.38 922.564 2741.38 926.923Z"
          fill="#E2F0FE"
        />
        <path
          d="M2724.83 891.036C2726.84 895.385 2724.93 900.538 2720.58 902.545L2567.06 973.427C2562.71 975.434 2557.54 973.527 2555.55 969.177C2553.53 964.828 2555.43 959.659 2559.78 957.651L2713.3 886.787C2717.65 884.779 2722.81 886.686 2724.83 891.036Z"
          fill="#E2F0FE"
        />
        <path
          d="M2708.28 855.149C2710.28 859.489 2708.38 864.66 2704.02 866.656L2550.5 937.522C2546.16 939.534 2540.99 937.638 2539 933.282C2536.99 928.925 2538.88 923.771 2543.24 921.776L2696.76 850.909C2701.1 848.897 2706.27 850.793 2708.28 855.149Z"
          fill="#E2F0FE"
        />
        <path
          d="M2454.93 1049.58L2478.77 1101.22L2301.17 1183.21C2286.92 1189.79 2270.01 1183.57 2263.44 1169.3C2256.85 1155.04 2263.07 1138.14 2277.34 1131.56L2454.93 1049.58Z"
          fill="#303841"
        />
        <path
          d="M3013.18 767.494L3055.6 859.374L2985.58 891.69L2943.18 799.812L3013.18 767.494Z"
          fill="#303841"
        />
        <path
          d="M3004.69 808.099C3198.55 741.706 3406.08 791.623 3639.16 960.705C3674.57 986.403 3716.29 1025.99 3764.59 1071.82C3888.51 1189.41 4042.72 1335.76 4177.81 1326.48C4229.49 1322.94 4273.89 1297.11 4313.52 1247.54C4443.04 1085.55 4402.7 865.513 4367.09 671.378C4365.4 662.028 4363.68 652.752 4362.01 643.557C4358.94 626.585 4355.68 609.434 4352.41 592.146C4326.99 457.454 4300.66 318.19 4332.88 184.909C4352.39 104.246 4399.26 44.5165 4468.39 12.1484C4545.99 -24.1952 4644.91 -19.9742 4733 23.4368C4826.94 69.7189 4903.09 156.099 4953.2 273.245C4995.11 371.203 5017.99 488.369 5017.62 603.162C5017 791.309 4978.33 978.219 4940.93 1158.93L4939.06 1168C4936.61 1179.83 4934.11 1191.71 4931.61 1203.64C4898.75 1359.8 4864.73 1521.29 4930.13 1671.32C4983.14 1792.91 5087.9 1846.88 5168.19 1846.43L5168.34 1870.16C5114.11 1870.45 5060.05 1851.13 5012.02 1814.27C4967.97 1780.47 4931.16 1733.07 4908.39 1680.8C4839.95 1523.83 4874.72 1358.59 4908.39 1198.74C4910.89 1186.85 4913.37 1174.99 4915.83 1163.2L4917.72 1154.13C4954.84 974.555 4993.27 788.84 4993.89 603.086C4994.26 491.454 4972.07 377.63 4931.38 282.583C4883.51 170.725 4811.29 88.4674 4722.53 44.7129C4640.83 4.46741 4549.59 0.32019 4478.45 33.6207C4416.07 62.8232 4373.72 117.081 4355.97 190.48C4324.91 318.806 4350.77 455.518 4375.75 587.741C4379.02 605.088 4382.28 622.293 4385.35 639.321C4387.02 648.502 4388.71 657.765 4390.43 667.098C4426.94 866.222 4468.32 1091.92 4332.05 1262.36C4288.64 1316.65 4237.3 1346.19 4179.43 1350.16C4033.96 1360.15 3875.56 1209.82 3748.27 1089.04C3700.56 1043.78 3659.36 1004.7 3625.23 979.912C3398.84 815.699 3198.4 766.84 3012.39 830.548L3004.69 808.099Z"
          fill="#303841"
        />
        <path
          d="M2062.73 817.947C2062.73 793.427 2058.05 775.04 2048.68 762.773C2039.29 750.52 2023.07 744.387 2000 744.387C1976.92 744.387 1960.69 750.52 1951.32 762.773C1941.95 775.04 1937.27 793.427 1937.27 817.947V1039.05L1969.71 1368.33V1367.47C1971.15 1378.43 1974.91 1385.93 1980.96 1389.96C1987.01 1394 1993.36 1396.03 2000 1396.03C2006.63 1396.03 2012.91 1394.08 2018.83 1390.19C2024.73 1386.28 2028.41 1379 2029.85 1368.33L2062.73 1039.05V817.947ZM1960.31 1494.55C1962.53 1489.31 1965.61 1484.75 1969.51 1480.85C1973.41 1476.95 1977.97 1473.88 1983.2 1471.64C1988.43 1469.4 1994.03 1468.28 2000 1468.28C2005.97 1468.28 2011.57 1469.4 2016.8 1471.64C2022.03 1473.88 2026.59 1476.95 2030.49 1480.85C2034.39 1484.75 2037.45 1489.31 2039.71 1494.55C2041.95 1499.77 2043.05 1505.37 2043.05 1511.35C2043.05 1517.32 2041.95 1522.92 2039.71 1528.15C2037.45 1533.37 2034.39 1537.93 2030.49 1541.83C2026.59 1545.73 2022.03 1548.8 2016.8 1551.04C2011.57 1553.28 2005.97 1554.4 2000 1554.4C1994.03 1554.4 1988.43 1553.28 1983.2 1551.04C1977.97 1548.8 1973.41 1545.73 1969.51 1541.83C1965.61 1537.93 1962.53 1533.37 1960.31 1528.15C1958.05 1522.92 1956.95 1517.32 1956.95 1511.35C1956.95 1505.37 1958.05 1499.77 1960.31 1494.55Z"
          fill="#303841"
        />
        <path
          d="M0 882.094V811.676C43.56 786.445 85.9908 759.024 127.094 729.514C233.618 653.025 329.633 563.63 412.481 463.817C432.013 440.278 451.553 415.363 470.452 391.26C548.016 292.343 628.221 190.059 744.111 132.812C812.619 98.9721 892.537 82.0023 982.851 82.0023C1031.8 82.0023 1083.8 86.9786 1138.71 96.9648C1208.36 109.638 1277.1 128.665 1343.56 147.062C1398.52 162.29 1455.35 178.016 1511.6 189.777C1601.33 208.538 1694.36 218.01 1788.88 218.01C1807.14 218.01 1825.49 217.646 1843.87 216.949C1953.27 212.719 2064.68 195.915 2175 167.001C2315.79 130.108 2454.57 73.3761 2584.85 0.00561523H2703.91C2544.15 102.157 2368.96 179.575 2190.56 226.338C2075.92 256.379 1960.09 273.83 1846.22 278.226C1827.06 278.973 1807.9 279.338 1788.84 279.338C1690.13 279.338 1592.91 269.451 1499.04 249.81C1440.88 237.651 1383.08 221.643 1327.2 206.183C1262.04 188.135 1194.67 169.489 1127.73 157.314C1076.41 147.974 1028.05 143.313 982.82 143.313C902.059 143.313 831.255 158.176 771.273 187.803C667.884 238.862 592.053 335.573 518.718 429.114C499.56 453.533 479.753 478.797 459.675 502.999C373.493 606.826 273.634 699.804 162.868 779.329C110.528 816.918 56.1194 851.239 0 882.094Z"
          fill="#C2D2E2"
        />
        <path
          d="M-193.844 945.631L-215.876 888.389C-94.8202 841.794 20.5723 779.385 127.094 702.89C233.617 626.395 329.635 537.007 412.479 437.197C432.014 413.658 451.556 388.736 470.454 364.643C548.017 265.715 628.22 163.433 744.11 106.175C849.755 53.9971 982.516 41.9335 1138.71 70.3469C1208.36 82.9981 1277.1 102.027 1343.56 120.433C1398.52 135.66 1455.35 151.387 1511.6 163.157C1618.7 185.556 1730.48 194.681 1843.88 190.309C1953.26 186.092 2064.69 169.292 2175 140.378C2389 84.2944 2598.32 -17.5721 2780.31 -154.195L2817.14 -105.145C2628.84 36.213 2412.16 141.622 2190.56 199.711C2075.92 229.749 1960.09 247.205 1846.23 251.594C1727.86 256.174 1611.04 246.617 1499.04 223.181C1440.88 211.014 1383.08 195.027 1327.2 179.541C1262.04 161.515 1194.67 142.849 1127.74 130.682C984.78 104.688 864.853 114.954 771.274 161.169C667.885 212.241 592.054 308.957 518.718 402.476C499.562 426.914 479.754 452.182 459.674 476.361C373.492 580.197 273.632 673.18 162.868 752.717C52.1026 832.254 -67.9117 897.152 -193.844 945.631Z"
          fill="#303841"
        />
        <path
          d="M2937.69 2700H2875.75C2913.13 2676.71 2956.22 2658.29 3005.3 2644.53C3118.18 2612.89 3243.9 2610.07 3365.47 2607.32C3425.54 2605.97 3482.28 2604.69 3534.04 2599.89C3615.8 2592.29 3674.45 2577.55 3724.17 2552.08C3759.21 2534.13 3787.53 2510.65 3808.34 2482.29C3827.68 2455.88 3840.17 2425.85 3845.4 2393.03C3857.99 2313.85 3827.19 2227.95 3762.97 2163.21C3728.32 2128.29 3686.92 2097.36 3643.09 2064.59C3560.1 2002.56 3474.28 1938.42 3433.79 1843.23C3407.61 1781.71 3407.56 1711.75 3433.62 1651.29C3457.64 1595.65 3501.62 1553.65 3557.45 1533.01C3615.78 1511.47 3681.81 1500.65 3754.58 1500.65C3787.36 1500.65 3821.52 1502.84 3856.98 1507.24C3903.53 1513.03 3951.95 1522.8 4000 1535.96V1566.44C3922.18 1544.52 3837.35 1530.11 3754.77 1530.11C3689.5 1530.11 3625.59 1539.11 3567.63 1560.53C3519.36 1578.36 3481.35 1614.71 3460.56 1662.91C3437.64 1716.03 3437.72 1777.56 3460.78 1831.75C3498.18 1919.65 3580.78 1981.39 3660.66 2041.09C3703.41 2073.05 3747.61 2106.11 3783.8 2142.56C3854.58 2213.91 3888.44 2309.27 3874.35 2397.64C3861.99 2475.21 3813.42 2539.33 3737.54 2578.19C3684.34 2605.44 3622.4 2621.15 3536.76 2629.09C3483.97 2634 3426.72 2635.29 3366.13 2636.65C3246.38 2639.35 3122.53 2642.13 3013.2 2672.79C2985.84 2680.45 2960.76 2689.48 2937.69 2700Z"
          fill="#C2D2E2"
        />
        <path
          d="M2710.8 2933.25L2712.98 2827.71L2729.79 2828.05C2782.4 2737.85 2865.94 2677.67 2984.12 2644.53C3097.01 2612.89 3222.72 2610.07 3344.29 2607.33C3404.39 2605.97 3461.13 2604.69 3512.88 2599.89C3594.65 2592.29 3653.28 2577.55 3702.99 2552.08C3738.04 2534.13 3766.35 2510.65 3787.16 2482.29C3806.53 2455.88 3818.99 2425.85 3824.22 2393.03C3836.83 2313.85 3806.04 2227.95 3741.79 2163.23C3707.14 2128.29 3665.74 2097.36 3621.91 2064.6C3538.94 2002.56 3453.1 1938.42 3412.61 1843.23C3386.43 1781.71 3386.38 1711.75 3412.44 1651.29C3436.47 1595.65 3480.44 1553.65 3536.27 1533.01C3620.91 1501.75 3721.67 1493.08 3835.8 1507.24C3930.99 1519.05 4033.96 1547.59 4125.74 1587.6L4114.04 1614.48C3955.75 1545.51 3723.53 1495.12 3546.45 1560.53C3498.21 1578.36 3460.2 1614.71 3439.39 1662.91C3416.49 1716.03 3416.54 1777.56 3439.61 1831.75C3477.01 1919.65 3559.61 1981.39 3639.48 2041.09C3682.23 2073.05 3726.45 2106.11 3762.62 2142.56C3833.42 2213.91 3867.26 2309.27 3853.18 2397.64C3840.83 2475.21 3792.24 2539.33 3716.37 2578.19C3663.16 2605.44 3601.25 2621.15 3515.58 2629.09C3462.82 2634 3405.57 2635.29 3344.96 2636.65C3225.2 2639.35 3101.37 2642.13 2992.05 2672.79C2933.55 2689.17 2885.5 2711.77 2845.15 2741.87C2799.68 2775.76 2765.35 2818.12 2740.12 2871.33L2710.8 2933.25Z"
          fill="#303841"
        />{' '}
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="4000" height="2700" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const CalendarIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z" />
    </svg>
  );
};
export const LocationIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z" />
      <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" />
    </svg>
  );
};
export const DesktopIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2v-.278zM5 16V5h14l.002 11H5z"></path>
    </svg>
  );
};
export const CheckIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"></path>
      <path d="m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z"></path>
    </svg>
  );
};
export const SaveIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></path>
    </svg>
  );
};
export const EditIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('generic-icon', className)}
    >
      <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
    </svg>
  );
};
export const ImageIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <circle cx="7.499" cy="9.5" r="1.5"></circle>
      <path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path>
      <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path>
    </svg>
  );
};
export const NoCameraIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('generic-icon', className)}
      viewBox="0 0 24 24"
    >
      <path d="M8.014 12.135c.074 2.062 1.789 3.777 3.851 3.851l-3.851-3.851z"></path>
      <path d="M4 20h11.879l-2-2H4V8.121L2.144 6.265A1.976 1.976 0 0 0 2 7v11c0 1.103.897 2 2 2zM20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.997.997 0 0 0-.707.293L6.586 5h-.172L3.707 2.293 2.293 3.707l18 18 1.414-1.414-.626-.626A1.98 1.98 0 0 0 22 18V7c0-1.103-.897-2-2-2zm-6.081 7.505-2.424-2.425c.163-.046.331-.08.505-.08 1.065 0 2 .935 2 2 0 .174-.033.342-.081.505zm1.502 1.501A3.881 3.881 0 0 0 16 12c0-2.168-1.832-4-4-4-.729 0-1.412.22-2.007.579L7.914 6.5l2.5-2.5h3.172l2.707 2.707A.996.996 0 0 0 17 7l3-.001V18h-.586l-3.993-3.994z"></path>
    </svg>
  );
};
