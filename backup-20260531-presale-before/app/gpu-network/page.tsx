import Link from "next/link";
// 1. Ortak Header bileşenini içe aktarıyoruz
import Header from "@/components/Header"; 

const stats = [
  ["33", "TOTAL GPUS", "ONLINE"],
  ["390GB", "TOTAL VRAM", "VRAM"],
  ["24/7", "COMPUTE", "RUNNING"],
  ["4", "ACTIVE CLUSTERS", "ONLINE"],
  ["99.8%", "NETWORK UPTIME", "STABLE"],
];

const clusters = [
  {
    name: "RTX 3090",
    active: 6,
    total: 20,
    label: "RTX 3090",
    image: "/gpu-3090.png",
    imageClass: "",
  },
  {
    name: "RTX 3080",
    active: 3,
    total: 20,
    label: "RTX 3080",
    image: "/gpu-3080.png",
    imageClass: "",
  },
  {
    name: "RTX 3060",
    active: 12,
    total: 20,
    label: "RTX 3060",
    image: "/gpu-3060.png",
    imageClass: "gpu3060",
  },
  {
    name: "GTX 1660 SUPER",
    active: 12,
    total: 20,
    label: "GTX 1660S",
    image: "/gpu-1660s.png",
    imageClass: "",
  },
];

const future = [
  {
    image: "/gpu-5090.png",
    name: "RTX 5090",
    status: "COMING SOON",
    imageClass: "futureImgNormal gpu5090",
  },
  {
    image: "/gpu-4090.png",
    name: "RTX 4090",
    status: "COMING SOON",
    imageClass: "futureImgNormal",
  },
  {
    image: "/gpu-h100.png",
    name: "H100",
    status: "ENTERPRISE AI",
    imageClass: "futureImgH100",
  },
  {
    image: "/gpu-h200.png",
    name: "H200",
    status: "ENTERPRISE AI",
    imageClass: "futureImgH200",
  },
];

export default function GpuNetworkPage() {
  return (
    // main yerine flex-col düzenine sahip bir kapsayıcı div kullanıyoruz ki header en üstte temiz dursun
    <div className="flex min-h-screen flex-col bg-[#020400]">
      
      {/* 2. Ortak Header'ı çağırıyoruz ve 'gpu' sekmesini aktif ediyoruz */}
      <Header active="gpu" />

      <main className="gpuPage flex-1">
        <style>{`
          .gpuPage{
            color:white;
            font-family:Arial, Helvetica, sans-serif;
            overflow-x:hidden;
            background-image:
              radial-gradient(circle at top right, rgba(140,255,0,.13), transparent 34%),
              linear-gradient(rgba(140,255,0,.032) 1px, transparent 1px),
              linear-gradient(90deg, rgba(140,255,0,.032) 1px, transparent 1px);
            background-size:100% 100%,52px 52px,52px 52px;
          }

          /* ESKİ HEADER STİLLERİ GEREKSİZ KALABALIK YAPMAMASI İÇİN BURADAN SİLİNDİ */

          .hero{
            padding:30px 34px 22px;
            display:grid;
            grid-template-columns:1fr 1.35fr;
            gap:34px;
            align-items:center;
          }

          .liveBadge{
            display:inline-flex;
            align-items:center;
            gap:12px;
            border:1px solid rgba(140,255,0,.5);
            background:rgba(140,255,0,.08);
            color:#8cff00;
            border-radius:14px;
            padding:11px 18px;
            font-size:14px;
            font-weight:900;
            letter-spacing:.04em;
          }

          .dot{
            width:9px;
            height:9px;
            border-radius:50%;
            background:#8cff00;
            box-shadow:0 0 18px #8cff00;
          }

          .hero h1{
            font-size:30px;
            line-height:.96;
            margin:26px 0 16px;
            font-weight:900;
          }

          .green{color:#8cff00;}

          .hero p{
            color:rgba(255,255,255,.74);
            font-size:16px;
            line-height:1.42;
            max-width:590px;
          }

          .statsGrid{
            display:grid;
            grid-template-columns:repeat(5,1fr);
            gap:16px;
          }

          .statCard{
            min-height:108px;
            border:1px solid rgba(140,255,0,.24);
            background:rgba(10,15,12,.82);
            border-radius:18px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            box-shadow:0 0 32px rgba(140,255,0,.07);
          }

          .statValue{
            font-size:30px;
            font-weight:900;
            color:#8cff00;
          }

          .statLabel{
            margin-top:9px;
            font-size:10px;
            font-weight:900;
          }

          .statSub{
            margin-top:5px;
            font-size:9px;
            color:rgba(255,255,255,.52);
            font-weight:700;
          }

          .phasePanel{
            margin:0 34px 24px;
            border:1px solid rgba(140,255,0,.28);
            background:rgba(4,8,6,.78);
            border-radius:26px;
            padding:22px;
            box-shadow:0 0 55px rgba(140,255,0,.07);
          }

          .phaseHead{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:20px;
          }

          .phaseTitle{
            display:flex;
            align-items:center;
            gap:18px;
          }

          .phaseTitle h2{
            font-size:25px;
            margin:0;
            font-weight:900;
          }

          .tag{
            border:1px solid rgba(140,255,0,.55);
            color:#8cff00;
            border-radius:9px;
            padding:8px 15px;
            font-size:11px;
            font-weight:900;
          }

          .overview{
            border:1px solid rgba(255,255,255,.4);
            color:white;
            border-radius:9px;
            background:transparent;
            padding:9px 15px;
            font-size:11px;
            font-weight:900;
          }

          .clusterRow{
            border:1px solid rgba(140,255,0,.16);
            background:rgba(0,0,0,.45);
            border-radius:18px;
            padding:18px;
            margin-bottom:16px;
            display:grid;
            grid-template-columns:190px 1fr;
            gap:20px;
          }

          .clusterInfo{
            display:flex;
            flex-direction:column;
            justify-content:center;
          }

          .clusterImgBox{
            width:160px;
            height:82px;
            border:1px solid rgba(140,255,0,.18);
            border-radius:14px;
            background:rgba(0,0,0,.45);
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:15px;
            overflow:hidden;
          }

          .clusterImgBox img{
            width:132px;
            height:62px;
            object-fit:contain;
            display:block;
            margin:auto;
            transform-origin:center;
          }

          .clusterImgBox img.gpu3060{
            transform:scale(1.55);
          }

          .clusterInfo h3{
            font-size:22px;
            margin:0;
            font-weight:900;
            line-height:1.08;
          }

          .clusterInfo .small{
            margin-top:7px;
            color:rgba(255,255,255,.68);
            font-size:12px;
            font-weight:700;
          }

          .activeCount{
            margin-top:21px;
            color:#8cff00;
            font-size:24px;
            font-weight:900;
          }

          .slots{
            display:grid;
            grid-template-columns:repeat(10, minmax(78px,1fr));
            gap:10px;
          }

          .slot{
            height:68px;
            border-radius:11px;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
          }

          .slotActive{
            border:1px solid #8cff00;
            background:rgba(140,255,0,.10);
            color:#8cff00;
            box-shadow:0 0 20px rgba(140,255,0,.30);
          }

          .slotEmpty{
            border:1px dashed rgba(255,255,255,.28);
            background:rgba(255,255,255,.025);
            color:rgba(255,255,255,.40);
          }

          .slotName{
            font-size:11px;
            font-weight:900;
            line-height:1.05;
            letter-spacing:.02em;
          }

          .slotStatus{
            margin-top:7px;
            font-size:8.5px;
            font-weight:900;
          }

          .futureWrap{
            margin:0 34px 34px;
            display:grid;
            grid-template-columns:1fr 300px;
            gap:20px;
          }

          .futurePanel,.targetPanel{
            border:1px solid rgba(255,190,60,.35);
            background:rgba(5,7,6,.78);
            border-radius:22px;
            padding:22px;
          }

          .futureHead{
            display:flex;
            align-items:center;
            gap:18px;
            margin-bottom:18px;
          }

          .futureHead h2{
            margin:0;
            font-size:22px;
            font-weight:900;
          }

          .orangeTag{
            border:1px solid rgba(255,190,60,.55);
            color:#ffbd32;
            border-radius:8px;
            padding:8px 15px;
            font-size:11px;
            font-weight:900;
          }

          .futureGrid{
            display:grid;
            grid-template-columns:repeat(4,1fr);
            gap:14px;
          }

          .futureCard{
            border:1px solid rgba(255,190,60,.42);
            background:rgba(255,190,60,.04);
            border-radius:16px;
            padding:16px;
            min-height:148px;
          }

          .futureImg{
            height:86px;
            border:1px solid rgba(255,190,60,.18);
            border-radius:12px;
            background:rgba(0,0,0,.45);
            margin-bottom:13px;
            display:flex;
            align-items:center;
            justify-content:center;
            overflow:hidden;
          }

          .futureImg img{
            object-fit:contain;
            display:block;
            margin:auto;
            transform-origin:center;
          }

          .futureImgNormal{
            width:178px;
            height:68px;
          }

          .futureImgH100{
            width:168px;
            height:62px;
          }

          .futureImgH200{
            width:220px;
            height:95px;
          }

          .gpu5090{
            transform:scale(1.28);
          }

          .futureName{
            font-size:19px;
            font-weight:900;
          }

          .futureStatus{
            margin-top:7px;
            color:#ffbd32;
            font-size:11px;
            font-weight:900;
          }

          .targetPanel{
            display:flex;
            flex-direction:column;
            justify-content:center;
            border-color:rgba(140,255,0,.22);
          }

          .targetTitle{
            color:rgba(255,255,255,.72);
            font-size:12px;
            font-weight:900;
          }

          .targetBig{
            margin-top:32px;
            font-size:32px;
            font-weight:900;
          }

          .targetSub{
            margin-top:9px;
            color:rgba(255,255,255,.55);
            font-size:13px;
          }

          .phase2{
            margin-top:30px;
            color:#ffbd32;
            font-size:26px;
            font-weight:900;
          }

          @media(max-width:1200px){
            /* .nav gizleme kuralı silindi çünkü artık üst bileşende hallediliyor */
            .hero{grid-template-columns:1fr;}
            .statsGrid{grid-template-columns:repeat(2,1fr);}
            .clusterRow{grid-template-columns:1fr;}
            .slots{grid-template-columns:repeat(5,1fr);}
            .futureWrap{grid-template-columns:1fr;}
            .futureGrid{grid-template-columns:repeat(2,1fr);}
          }

          @media(max-width:700px){
            .hero{padding:22px 16px;}
            .phasePanel{margin:0 16px 20px;padding:16px;}
            .futureWrap{margin:0 16px 24px;}
            .hero h1{font-size:33px;}
            .statsGrid{grid-template-columns:1fr;}
            .slots{grid-template-columns:repeat(2,1fr);}
            .futureGrid{grid-template-columns:1fr;}
          }
        `}</style>

        {/* ESKİ <header> ETİKETİ TAMAMEN SİLİNDİ */}

        <section className="hero">
          <div>
            <div className="liveBadge">
              <span className="dot" />
              LIVE GPU INFRASTRUCTURE
            </div>

            <h1>
              GPU NETWORK
              <br />
              <span className="green">POWER LAYER</span>
            </h1>

            <p>
              The Alpha Wolf GPU Network powers AI compute, rendering, inference and decentralized workloads across active GPU clusters.
            </p>
          </div>

          <div className="statsGrid">
            {stats.map(([value, label, sub]) => (
              <div className="statCard" key={label}>
                <div className="statValue">{value}</div>
                <div className="statLabel">{label}</div>
                <div className="statSub">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="phasePanel">
          <div className="phaseHead">
            <div className="phaseTitle">
              <h2>PHASE 1</h2>
              <span className="tag">CURRENT PHASE</span>
            </div>
            <button className="overview">PHASES OVERVIEW</button>
          </div>

          {clusters.map((cluster) => (
            <div className="clusterRow" key={cluster.name}>
              <div className="clusterInfo">
                <div className="clusterImgBox">
                  <img
                    src={cluster.image}
                    alt={cluster.name}
                    className={cluster.imageClass}
                  />
                </div>

                <h3>{cluster.name}</h3>
                <div className="small">CLUSTER</div>

                <div className="activeCount">
                  {cluster.active} / {cluster.total}
                </div>
                <div className="small">ACTIVE</div>
              </div>

              <div className="slots">
                {Array.from({ length: cluster.total }).map((_, i) => {
                  const active = i < cluster.active;

                  return (
                    <div
                      key={i}
                      className={`slot ${active ? "slotActive" : "slotEmpty"}`}
                    >
                      {active ? (
                        <>
                          <div className="slotName">{cluster.label}</div>
                          <div className="slotStatus">● ONLINE</div>
                        </>
                      ) : (
                        <>
                          <div className="slotName">+</div>
                          <div className="slotStatus">AVAILABLE</div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="futureWrap">
          <div className="futurePanel">
            <div className="futureHead">
              <h2>FUTURE EXPANSION</h2>
              <span className="orangeTag">COMING SOON</span>
            </div>

            <div className="futureGrid">
              {future.map((item) => (
                <div className="futureCard" key={item.name}>
                  <div className="futureImg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={item.imageClass}
                    />
                  </div>
                  <div className="futureName">{item.name}</div>
                  <div className="futureStatus">{item.status}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="targetPanel">
            <div className="targetTitle">NEXT PHASE TARGET</div>
            <div className="targetBig">+100 GPUs</div>
            <div className="targetSub">PLANNED EXPANSION</div>
            <div className="phase2">Phase 2</div>
          </div>
        </section>
      </main>
    </div>
  );
}