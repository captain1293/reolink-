import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, '../src/constants/headerProducts.ts')

const badges = {
  '16mp': "{ position: 'right-top', type: '16mp', imageKey: 'badge16mp' }",
  zoom: "{ position: 'right-top', type: 'zoom', imageKey: 'badgeZoom' }",
  '4k': "{ position: 'right-bottom', type: '4k', imageKey: 'badge4k' }",
  colorX: "{ position: 'right-top', type: 'colorX', imageKey: 'badgeColorX' }",
  '180': "{ position: 'right-bottom', type: '180', imageKey: 'badge180' }",
  pt: "{ position: 'right-top', type: 'pt', imageKey: 'badgePt' }",
  wifi: "{ position: 'right-top', type: 'wi-fi', imageKey: 'badgeWifi' }",
}

const p = (id, name, href, img, badge) => ({ id, name, href, image: img, badge })

const categories = [
  {
    id: 3391,
    label: 'PoE IP Cameras & NVRs',
    bottom: [
      ['More Products', 'https://store.reolink.com/poe-ip-cameras/'],
      ['Product Comparison', 'https://reolink.com/comparison/#poe'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(5619336, 'OMVI 3i PoE', 'https://reolink.com/product/omvi-3i-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/OMVI-3i-PoE1pack.png'),
            p(4594421, 'Elite Pro Floodlight PoE', 'https://reolink.com/product/elite-pro-floodlight-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/10/Elite-Pro-Floodlight-PoE@1x.png', '16mp'),
            p(3095506, 'Reolink Duo 3V PoE', 'https://reolink.com/product/reolink-duo-3v-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/Duo-3V-PoE.png', '16mp'),
          ]],
          ['16MP PoE Cameras', [
            p(3064137, 'Reolink Duo 3 PoE', 'https://reolink.com/product/reolink-duo-3-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/01/050342161704426136.719.png'),
          ]],
        ],
      },
      {
        subs: [
          ['12MP PoE Cameras', [
            p(3196688, 'RLC-1240A', 'https://reolink.com/product/rlc-1240a/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/04/1240A-1pack.png'),
            p(1587106, 'RLC-1212A', 'https://reolink.com/product/rlc-1212a/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/01/210404441642737884.1225.png'),
            p(1643635, 'RLC-1224A', 'https://reolink.com/product/rlc-1224a/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/01/210404571642737897.3887.png'),
          ]],
          ['4K PoE Cameras with ZOOM', [
            p(1264175, 'RLC-811A', 'https://reolink.com/product/rlc-811a/', 'https://reolink.com/wp-content/uploads/2021/03/050713171614928397.8822.png', 'zoom'),
            p(2871418, 'RLC-843A', 'https://reolink.com/product/rlc-843a/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/12/110241451702262505.8584.png'),
            p(2402674, 'RLC-833A', 'https://reolink.com/product/rlc-833a/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/11/140621571668406917.6064.png'),
          ]],
        ],
      },
      {
        subs: [
          ['4K PoE Cameras with PTZ', [
            p(3006356, 'RLC-823S2', 'https://reolink.com/product/rlc-823s2/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/01/240140161706060416.0631.png'),
            p(3006335, 'RLC-823S1', 'https://reolink.com/product/rlc-823s1/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/04/RLC-823S1-1pack.png'),
            p(2180784, 'Reolink TrackMix PoE', 'https://reolink.com/product/reolink-trackmix-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/06/280627521656397672.1918.png'),
          ]],
          ['4K PoE Cameras', [
            p(3221338, 'E1 Outdoor SE PoE', 'https://reolink.com/product/e1-outdoor-se-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/E1-Outddoor-SE-POE.png'),
            p(2239332, 'Reolink Duo 2 PoE', 'https://reolink.com/product/reolink-duo-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/09/100416541631247414.8092.png'),
            p(3006327, 'RLC-840A', 'https://reolink.com/product/rlc-840a/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/12/210300111703127611.4476.png'),
            p(3344758, 'Reolink Duo 2V PoE', 'https://reolink.com/product/reolink-duo-2v-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/Duo-2V-PoE.png', '4k'),
            p(1044755, 'RLC-810A', 'https://reolink.com/product/rlc-810a/', 'https://reolink.com/wp-content/assets/2020/07/rlc-810a-340.png'),
            p(1087724, 'RLC-820A', 'https://reolink.com/product/rlc-820a/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/07/310158421627696722.9425.png'),
          ]],
        ],
      },
      {
        subs: [
          ['ColorX Series', [
            p(3893624, 'CX820', 'https://reolink.com/product/cx820/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/01/cx820-1-Pack@1x.png', 'colorX'),
            p(2912376, 'CX810', 'https://reolink.com/product/cx810/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/04/CX810-1pack.png', 'colorX'),
          ]],
          ['2K+ PoE Cameras', [
            p(2670031, 'FE-P', 'https://reolink.com/product/fe-p/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/06/fe-p-white-1pack.png'),
            p(1044741, 'RLC-510A', 'https://reolink.com/product/rlc-510a/', 'https://home-cdn.reolink.us/wp-content/assets/2020/07/rlc-510a-340.png'),
            p(1087720, 'RLC-520A', 'https://reolink.com/product/rlc-520a/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/12/200329481639970988.3716.png'),
            p(2123994, 'Reolink Video Doorbell PoE', 'https://reolink.com/product/reolink-video-doorbell-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/07/060323501688613830.9308.png'),
          ]],
        ],
      },
      {
        subs: [
          ['NVR for Local Storage', [
            p(1321842, 'RLN8-410', 'https://reolink.com/product/rln8-410/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/11/171012531700215973.8566.png'),
            p(2820, 'RLN16-410', 'https://reolink.com/product/rln16-410/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/11/171012551700215975.5776.png'),
            p(2087522, 'RLN36', 'https://reolink.com/product/rln36/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/11/171012521700215972.7829.png'),
          ]],
        ],
      },
    ],
  },
  {
    id: 3392,
    label: 'Wi-Fi Cameras & NVRs',
    bottom: [
      ['More Products', 'https://store.reolink.com/wifi-security-cameras/'],
      ['Product Comparison', 'https://reolink.com/comparison/#wifi'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(5624877, 'OMVI 3i WiFi', 'https://reolink.com/product/omvi-3i-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/OMVI-3i-WiFi-1pack.png'),
            p(4786176, 'TrackFlex Floodlight WiFi', 'https://reolink.com/product/trackflex-floodlight-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/09/1-Pack-Hardwired@1x.png', 'zoom'),
            p(4421411, 'Elite Floodlight WiFi', 'https://reolink.com/product/elite-floodlight-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/06/Reolink-Elite-Floodlight-WiFi-1-Pack-Hardwired.png', '180'),
            p(4126962, 'Reolink Elite WiFi', 'https://reolink.com/product/elite-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/03/Elite-WiFi-white-1pack.png', '180'),
            p(3741801, 'Reolink Duo 3 WiFi', 'https://reolink.com/product/reolink-duo-3-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/12/Duo-3-WiFi-1-Pack.png', '16mp'),
          ]],
          ['4K Wi-Fi 6 Cameras', [
            p(4126962, 'Reolink Elite WiFi', 'https://reolink.com/product/elite-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/03/Elite-WiFi-white-1pack.png', '180'),
            p(3479020, 'Lumus Pro', 'https://reolink.com/product/lumus-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/04/lumus-pro-1-pack.png'),
            p(2871557, 'RLC-810WA', 'https://reolink.com/product/rlc-810wa/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/12/070735221701934522.0882.png'),
            p(2706945, 'E1 Outdoor Pro', 'https://reolink.com/product/e1-outdoor-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/05/160805511684224351.237.png'),
          ]],
        ],
      },
      {
        subs: [
          ['2K+ Wi-Fi Cameras', [
            p(1044876, 'Lumus', 'https://reolink.com/product/reolink-lumus/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/07/reolink-lumus-white-1pack-–-1.png'),
            p(1216952, 'RLC-510WA', 'https://reolink.com/product/rlc-510wa/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/04/RLC-510WA-1-Pack-White.png'),
          ]],
          ['Indoors Only Wi-Fi Cameras', [
            p(383481, 'E1 Zoom', 'https://reolink.com/product/e1-zoom/', 'https://home-cdn.reolink.us/wp-content/assets/2019/10/e1-zoom-340.png'),
            p(277462, 'E1 Pro', 'https://reolink.com/product/e1-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/E1-PRO.png'),
            p(300845, 'E1', 'https://reolink.com/product/e1/', 'https://home-cdn.reolink.us/wp-content/assets/2019/05/e1-pro-340.png'),
            p(2662716, 'FE-W', 'https://reolink.com/product/fe-w/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/03/010407401677643660.6613.png'),
          ]],
        ],
      },
      {
        subs: [
          ['Dual-Lens Wi-Fi Cameras', [
            p(2239338, 'Reolink Duo 2 WiFi', 'https://reolink.com/product/reolink-duo-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/09/100410331631247033.8797.png'),
            p(2180808, 'Reolink TrackMix WiFi', 'https://reolink.com/product/reolink-trackmix-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/06/280627421656397662.0035.png'),
            p(2306750, 'Reolink Duo Floodlight WiFi', 'https://reolink.com/product/reolink-duo-floodlight-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/09/130846161663058776.1316.png'),
          ]],
          ['NVR for Local Storage', [
            p(3003913, 'RLN12W', 'https://reolink.com/product/rln12w/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/11/150425471700022347.615.png', 'wifi'),
          ]],
        ],
      },
    ],
  },
  {
    id: 3389,
    label: 'Battery-Powered Security Cameras',
    bottom: [
      ['More Products', 'https://store.reolink.com/battery-security-cameras/'],
      ['Product Comparison', 'https://reolink.com/comparison/#wifi-free'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(5247868, 'Reolink Solar Floodlight Cam', 'https://reolink.com/product/reolink-solar-floodlight-cam/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/Reolink-Solar-Floodlight-Cam@1x.png'),
            p(5376607, 'Argus MagiCam', 'https://reolink.com/product/argus-magicam/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/Argus-MagiCam.png'),
            p(5156674, 'Home Hub with Altas PT Ultra', 'https://reolink.com/product/altas-pt-ultra-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/12/Home-Hub-with-2x-Altas-PT-Ultra-Solar-Panel-2-White.png'),
            p(5606297, 'Argus Solar', 'https://reolink.com/product/argus-solar/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/Argus-Solar@1x.png'),
          ]],
          ['Argus Series (WiFi Connection)', [
            p(3220433, 'Argus 4 Pro', 'https://reolink.com/product/argus-4-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/06/argus-4-pro-white-1pack.png'),
            p(5627477, 'Argus 3 Pro with Solar Panel Lite', 'https://reolink.com/product/argus-3-pro-with-solar-panel-lite/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/lite-1pack.png'),
            p(2508265, 'Argus PT Ultra', 'https://reolink.com/product/argus-pt-ultra/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/Argus-PT-ultra-white-1pack-M.png', '4k'),
            p(1597746, 'Argus PT', 'https://reolink.com/product/argus-pt/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/09/030343151630640595.2908.png'),
            p(1264155, 'Argus 3 Pro', 'https://reolink.com/product/argus-3-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/03/240613101616566390.8154.png'),
            p(2791286, 'Argus Eco Ultra', 'https://reolink.com/product/argus-eco-ultra/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/08/210715141692602114.3836.png', '4k'),
            p(2836372, 'Argus Track', 'https://reolink.com/product/argus-track/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/12/190922201702977740.7369.png', '4k'),
            p(3307587, 'Argus 3E', 'https://reolink.com/product/argus-3e/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/06/Argus-3E-1-pack.png'),
          ]],
        ],
      },
      {
        subs: [
          ['Altas Series', [
            p(3418570, 'Altas PT Ultra', 'https://reolink.com/product/altas-pt-ultra/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/09/Altas-PT-Ultra.png', 'colorX'),
            p(4330927, 'Reolink Altas', 'https://reolink.com/product/reolink-altas/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/05/Altas_1-Packs.png', 'colorX'),
          ]],
          ['Dual-Lens Security Cameras', [
            p(2335881, 'Reolink TrackMix (Battery)', 'https://reolink.com/product/reolink-trackmix/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/01/Reolink-TrackMix-1-Pack.png'),
          ]],
        ],
      },
      {
        subs: [
          ['Home Hub with Battery Powered Wi-Fi Cameras', [
            p(5401295, 'Home Hub Mini with Altas PT Ultra', 'https://reolink.com/product/altas-pt-ultra-home-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/Home-Hub-Mini-with-2x-Altas-PT-Ultra-White-Solar-Panel-2-White-without-SD-Card.png'),
            p(5401362, 'Home Hub Mini with Argus PT Ultra', 'https://reolink.com/product/argus-pt-ultra-home-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/Home-Hub-Mini-with-Argus-PT-Ultra-White-SP-W3W@1x.png'),
            p(3235942, 'Home Hub with Argus PT Ultra', 'https://reolink.com/product/argus-pt-ultra-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/02/Hub-with-2x-Argus-pt-ultrasp.png'),
            p(5211820, 'Home Hub Mini with Argus PT', 'https://reolink.com/product/argus-pt-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/12/Hub-mini2xArgus-PTSP-W-400x400@1x.png'),
            p(4009126, 'Home Hub with Argus 4 Pro', 'https://reolink.com/product/argus-4-pro-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/02/Home-hub-with-2-argus-4-pro.png'),
            p(3239094, 'Home Hub with Argus Eco Ultra', 'https://reolink.com/product/argus-eco-ultra-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/05/Home-Hub-with-2×Argus-Eco-Ultra-Solar-Panel-2.png'),
          ]],
        ],
      },
    ],
  },
  {
    id: 3390,
    label: 'Security Camera Systems',
    bottom: [
      ['More Products', 'https://store.reolink.com/security-camera-systems/'],
      ['Product Comparison', 'https://reolink.com/comparison/#systems'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['12MP PoE Kit', [
            p(4684839, 'RLK16-1200D8-A ( New Version with Perimeter Protection)', 'https://reolink.com/product/rlk16-1200d8-a-new-version/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/RLK16-1200D8-A产品图-2.png'),
            p(4612163, 'RLK8-1200D4-A (New Version with Perimeter Protection)', 'https://reolink.com/product/rlk8-1200d4-a-new-version/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/05/RLK8-1200D4-A产品图@1x-2.png'),
            p(3353099, 'RLK8-1200V4', 'https://reolink.com/product/rlk8-1200v4/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/RLK8-1200V4.png'),
          ]],
          ['4K PoE Kit with Zoom', [
            p(3360593, 'RLK8-843V4', 'https://reolink.com/product/rlk8-843v4/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/07/rlk8-843v4-a-white-4-camera-bundle-without-18m-cables.png', 'zoom'),
            p(2239258, 'RLK8-811B4', 'https://reolink.com/product/rlk8-811b4-a/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/12/110739281702280368.3546.png', 'zoom'),
          ]],
        ],
      },
      {
        subs: [
          ['4K PoE Kit', [
            p(3353079, 'RLK8-800V4', 'https://reolink.com/product/rlk8-800v4/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/RLK8-800V4.png'),
            p(2109211, 'RLK8-800B4', 'https://reolink.com/product/rlk8-800b4/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/11/200706501700464010.8983.png'),
          ]],
          ['4K PoE Kit with Pan & Tilt', [
            p(3387138, 'RLK8-800PT4', 'https://reolink.com/product/rlk8-800pt4/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/RLK8-800PT4.png', 'pt'),
            p(3360667, 'RLK8-800TM4', 'https://reolink.com/product/rlk8-800tm4/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/RLK8-800TM4.png', 'pt'),
          ]],
        ],
      },
      {
        subs: [
          ['Mix & Match Bundles', [
            p(5011092, 'Reolink NVR+RLC-843A Bundle', 'https://reolink.com/product/nvr-rlc-843a/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/10/RLN16-410-NVR-RLC-843A-8-Pack.png'),
            p(5053307, 'Whole-Home Essential Security Kit', 'https://reolink.com/product/whole-home-essential-security-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/11/3-pack@1x-340.png'),
          ]],
          ['WiFi Kit', [
            p(3179192, 'RLK12-800WPT4', 'https://reolink.com/product/rlk12-800wpt4/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/03/rlk12-800wpt4.png', 'wifi'),
            p(2886565, 'RLK12-800WB4', 'https://reolink.com/product/rlk12-800wb4/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/09/250213311695608011.8381.png', 'wifi'),
          ]],
        ],
      },
    ],
  },
  {
    id: 5236,
    label: 'Cellular Security Cameras',
    bottom: [
      ['More Products', 'https://store.reolink.com/cellular-security-camera/'],
      ['Product Comparison', 'https://reolink.com/comparison/#cellular-security-camera'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(5176300, 'Reolink Go PT S Lite', 'https://reolink.com/product/reolink-go-pt-s-lite/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/01/Reolink-Go-PT-S-Lite-1-Pack-400x400@1x.png'),
            p(4648648, 'Reolink TrackMix LTE Plus 2', 'https://reolink.com/product/trackmix-lte-plus-2/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/09/Reolink-TrackMix-LTE-Plus-2-400x400@1x.png', 'colorX'),
            p(3479012, 'Talon Pro', 'https://reolink.com/product/talon-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/talon-pro-1-camera.png'),
          ]],
          ['Go Series (4G Connection)', [
            p(3042446, 'Reolink Go Ranger PT', 'https://reolink.com/product/reolink-go-ranger-pt/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/04/Go-Ranger-PT-1-Pack-SP3Camouflage.png', '4k'),
            p(2706856, 'Reolink Go PT Ultra', 'https://reolink.com/product/reolink-go-pt-ultra/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/04/Reolink-Go-PT-Ultra-1-Pack-White.png', '4k'),
          ]],
        ],
      },
      {
        subs: [
          ['Dual-Lens Security Cameras', [
            p(3390419, 'Reolink TrackMix LTE (C)', 'https://reolink.com/product/reolink-trackmix-lte-c/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/07/Reolink-TrackMix-LTE-Camouflage-1-Pack.png', '4k'),
            p(2335883, 'Reolink TrackMix LTE', 'https://reolink.com/product/reolink-trackmix-lte/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/04/Reolink-TrackMix-LTE-4K-1-Pack.png', '4k'),
            p(2306687, 'Reolink Duo 2 LTE', 'https://reolink.com/product/reolink-duo-2-lte/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/09/100824091631262249.7996.png'),
          ]],
        ],
      },
    ],
  },
  {
    id: 4105,
    label: 'Dual-Lens Security Cameras',
    bottom: [
      ['More Products', 'https://store.reolink.com/dual-lens-cameras/'],
      ['Product Comparison', 'https://reolink.com/comparison/#dual-lens-camera'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(3741801, 'Reolink Duo 3 WiFi', 'https://reolink.com/product/reolink-duo-3-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/12/Duo-3-WiFi-1-Pack.png', '16mp'),
            p(3095506, 'Reolink Duo 3V PoE', 'https://reolink.com/product/reolink-duo-3v-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/Duo-3V-PoE.png', '16mp'),
            p(3344758, 'Reolink Duo 2V PoE', 'https://reolink.com/product/reolink-duo-2v-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/Duo-2V-PoE.png', '4k'),
          ]],
          ['Duo Series (Dual-Lens, 180° Panorama)', [
            p(3064137, 'Reolink Duo 3 PoE', 'https://reolink.com/product/reolink-duo-3-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/01/050342161704426136.719.png'),
            p(2239332, 'Reolink Duo 2 PoE', 'https://reolink.com/product/reolink-duo-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/09/100416541631247414.8092.png'),
            p(2239338, 'Reolink Duo 2 WiFi', 'https://reolink.com/product/reolink-duo-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2021/09/100410331631247033.8797.png'),
          ]],
        ],
      },
      {
        subs: [
          ['TrackMix Series (Dual-Lens, Auto-Zoom Tracking)', [
            p(2180784, 'Reolink TrackMix PoE', 'https://reolink.com/product/reolink-trackmix-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/06/280627521656397672.1918.png'),
            p(2180808, 'Reolink TrackMix WiFi', 'https://reolink.com/product/reolink-trackmix-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2022/06/280627421656397662.0035.png'),
            p(2335881, 'Reolink TrackMix (Battery)', 'https://reolink.com/product/reolink-trackmix/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/01/Reolink-TrackMix-1-Pack.png'),
            p(2335883, 'Reolink TrackMix LTE', 'https://reolink.com/product/reolink-trackmix-lte/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/04/Reolink-TrackMix-LTE-4K-1-Pack.png', '4k'),
          ]],
        ],
      },
    ],
  },
  {
    id: 4349,
    label: 'Video Doorbells',
    bottom: [
      ['More Products', 'https://store.reolink.com/video-doorbells/'],
      ['Product Comparison', 'https://reolink.com/comparison/#video-doorbells'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(5396305, 'Home Hub Mini with Video Doorbell WiFi', 'https://reolink.com/product/reolink-video-doorbell-wifi-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/Home-Hub-Mini-with-Video-Doorbell-WiFi-Black-without-SD-Card.png'),
            p(5211856, 'Reolink Video Doorbell (Battery) with Home Hub Mini', 'https://reolink.com/product/reolink-video-doorell-battery-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/12/Video-Doorbell-Battery-Black-with-Home-Hub-mini-400x400@1x.png'),
          ]],
          ['Battery Video Doorbells', [
            p(3708885, 'Home Hub with Video Doorbell (Battery)', 'https://reolink.com/product/reolink-video-doorell-battery-hub-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/11/Video-Doorbell-Battery-black-with-Home-Hub.png'),
            p(3243372, 'Reolink Video Doorbell (Battery)', 'https://reolink.com/product/reolink-doorbell-battery/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/doorbell-battery-1pack.png'),
          ]],
        ],
      },
      {
        subs: [
          ['Wired Video Doorbells', [
            p(2123994, 'Reolink Video Doorbell PoE', 'https://reolink.com/product/reolink-video-doorbell-poe/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/07/060323501688613830.9308.png'),
            p(2267808, 'Reolink Video Doorbell WiFi', 'https://reolink.com/product/reolink-video-doorbell-wifi/', 'https://home-cdn.reolink.us/wp-content/uploads/2023/07/060326351688613995.8627.png'),
          ]],
        ],
      },
    ],
  },
  {
    id: 5161,
    label: 'Home Hub System',
    bottom: [
      ['More Products', 'https://store.reolink.com/home-hub-series/'],
      ['Product Comparison', 'https://reolink.com/comparison/#home-hub'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['New Release', [
            p(5401295, 'Home Hub Mini with Altas PT Ultra', 'https://reolink.com/product/altas-pt-ultra-home-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/Home-Hub-Mini-with-2x-Altas-PT-Ultra-White-Solar-Panel-2-White-without-SD-Card.png'),
            p(5411649, 'Home Hub Mini with E1 Outdoor Pro', 'https://reolink.com/product/e1-outdoor-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/03/hub-minie1-outdoor-pro.png'),
          ]],
          ['Home Hub（Local Security）', [
            p(3230234, 'Reolink Home Hub Pro', 'https://reolink.com/product/reolink-home-hub-pro/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/Home-Hub-Pro.png'),
            p(3224627, 'Reolink Home Hub', 'https://reolink.com/product/reolink-home-hub/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/05/hub.png'),
            p(5299097, 'Reolink Home Hub Mini', 'https://reolink.com/product/home-hub-mini/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/02/Home-Hub-Mini-without-SD-Card@1x.png'),
          ]],
        ],
      },
      {
        subs: [
          ['Home Hub with Battery Powered Wi-Fi Cameras', [
            p(5609326, 'Home Hub Mini with Argus 3 Pro', 'https://reolink.com/product/argus-3-pro-home-hub-mini-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2026/06/Home-Hub-Mini-with-2x-Argus-3-Pro-Solar-Panel-Lite@1x.png'),
            p(5211820, 'Home Hub Mini with Argus PT', 'https://reolink.com/product/argus-pt-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/12/Hub-mini2xArgus-PTSP-W-400x400@1x.png'),
          ]],
          ['Home Hub with Plugged-in Wi-Fi Cameras', [
            p(4014554, 'Home Hub Pro with TrackMix WiFi', 'https://reolink.com/product/trackmix-wifi-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/02/Home-Hub-Pro-with-4-Trackmix-WIFI.png'),
            p(3394880, 'Home Hub with Lumus', 'https://reolink.com/product/lumus-kit/', 'https://home-cdn.reolink.us/wp-content/uploads/2024/10/Home-Hub2-x-Lumus.png'),
          ]],
        ],
      },
    ],
  },
  {
    id: 3273,
    label: 'Accessories',
    bottom: [
      ['More Products', 'https://store.reolink.com/accessories/'],
      ['Product Comparison', 'https://reolink.com/comparison/'],
      ['Solution Finder', 'https://reolink.com/solution-finder/'],
    ],
    columns: [
      {
        subs: [
          ['Recommended Companions', [
            p(4800253, 'RLA-PS1E', 'https://reolink.com/product/rla-ps1e/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/09/RLA-PS1E-1-pack@1x.png'),
            p(3239107, 'Reolink Chime', 'https://reolink.com/product/reolink-chime/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/07/Reolink-Chime-1-pack.png'),
            p(102915, 'Ethernet Cable', 'https://store.reolink.com/accessories/#ethernet-cable', 'https://home-cdn.reolink.us/wp-content/uploads/2021/12/200611051639980665.3961.png'),
          ]],
          ['For Battery Cameras', [
            p(90329, 'Reolink Solar Panel', 'https://store.reolink.com/accessories/#reolink-solar-panel', 'https://home-cdn.reolink.us/wp-content/uploads/2023/11/021137271698925047.3321.png'),
            p(5059531, 'Reolink Solar Panel 2S', 'https://reolink.com/product/reolink-solar-panel-2s/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/11/Reolink-Solar-Panel-2S-WHITE-400@1x-2.png'),
          ]],
        ],
      },
      {
        subs: [
          ['For PoE Cameras & NVR Systems', [
            p(4800253, 'RLA-PS1E', 'https://reolink.com/product/rla-ps1e/', 'https://home-cdn.reolink.us/wp-content/uploads/2025/09/RLA-PS1E-1-pack@1x.png'),
            p(2269293, 'Power Adapter for PoE NVRs', 'https://store.reolink.com/accessories/#power-adapter-52v2-88a', 'https://home-cdn.reolink.us/wp-content/uploads/2022/08/230424141661228654.8658.png'),
            p(106704, 'Power Adapter 12V/2A', 'https://store.reolink.com/accessories/#power-adapter-12v2a', 'https://home-cdn.reolink.us/wp-content/uploads/2025/01/power-adapter-white.png'),
          ], { paginated: true, extra: [
            p(2871470, 'RLA-POECS1', 'https://store.reolink.com/accessories/#rla-poecs1', 'https://home-cdn.reolink.us/wp-content/uploads/2023/08/290215571693275357.2149.png'),
          ]}],
          ['For WiFi Cameras', [
            p(3917333, 'Antenna RLA-ATW1', 'https://store.reolink.com/accessories/#antenna-rla-atw1', 'https://home-cdn.reolink.us/wp-content/uploads/2025/02/Antenna-RLA-ATW1.png'),
            p(1216037, 'Power Extension Cable (White)', 'https://store.reolink.com/accessories/#power-extension-cable-white', 'https://home-cdn.reolink.us/wp-content/uploads/2021/12/200611551639980715.672.png'),
          ]],
        ],
      },
      {
        subs: [
          ['For Video Doorbells', [
            p(2732272, 'Wedge – Video Doorbell', 'https://store.reolink.com/accessories/#wedge-video-doorbell', 'https://home-cdn.reolink.us/wp-content/uploads/2023/05/310415591685506559.4624.png'),
          ]],
        ],
      },
    ],
  },
]

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function fmtProduct(prod) {
  const badgePart = prod.badge ? `, badges: [${badges[prod.badge]}]` : ''
  return `        { id: ${prod.id}, name: '${esc(prod.name)}', href: '${prod.href}', image: '${prod.image}'${badgePart} },`
}

function fmtSub([title, products, opts]) {
  const prods = products.map(fmtProduct).join('\n')
  let extra = ''
  if (opts?.extra?.length) {
    extra = `,\n        extraProducts: [\n${opts.extra.map(fmtProduct).join('\n')}\n        ],\n        paginated: true`
  } else if (opts?.paginated) {
    extra = ',\n        paginated: true'
  }
  return `      { title: '${esc(title)}', products: [\n${prods}\n      ]${extra} },`
}

function fmtCategory(cat) {
  const cols = cat.columns.map((col) => {
    const subs = col.subs.map(fmtSub).join('\n')
    return `    {\n      subCategories: [\n${subs}\n      ],\n    },`
  }).join('\n')
  const bottom = cat.bottom.map(([label, href]) => `      { label: '${label}', href: '${href}' },`).join('\n')
  return `  {
    id: ${cat.id},
    label: '${esc(cat.label)}',
    columns: [
${cols}
    ],
    bottomLinks: [
${bottom}
    ],
  },`
}

const content = `import type { ProductCategoryPanel } from '@/types/header'

/** 产品导航数据 — 由 scripts/generate-header-products.mjs 生成 */
export const PRODUCT_CATEGORIES: ProductCategoryPanel[] = [
${categories.map(fmtCategory).join('\n')}
]
`

writeFileSync(out, content)
console.log('Generated', out)
