import React from "react";

const RecruitersShowcase = () => {
  const recruiters = [
    {
      id: 1,
      name: "ICICI Bank",
      logo: "https://s3-alpha-sig.figma.com/img/c9c2/130d/7d5752c9be7046db2902aff1326c3060?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hqqPdIoJVxLpU1swOYyYPVLM9zqIuFQpGXSBbV-X41MPnqymLSaegX-pt7IMkYUksALnaTOG7OR0nz3iyPLcbNipUHaWTUEtC95EThYObUjESsSAqsTPZ16CudXTcpZsyIF7yIJnWuoNvda89UiXS46OpsSFr7W1NtFwrYcKnXDjWSE7XBh5epLYFyHD8Xu5N2AQw817oYdQT2c8OLBDUudWwIZb8wisPItSP0uL2h8ZZnI~-LS5guxrvtX9wegQ3U6FvrWTWVO9KOgVj2Nfq84s5rRws4458mJT5flI6CjjZE5E2Z654zpIWQV9j3MzSAkYoDCsQnXxYTuiVPR5sA__",
      style: "w-[277px] h-[103px]",
    },
    {
      id: 2,
      name: "Fortis",
      logo: "https://s3-alpha-sig.figma.com/img/fa52/e2d0/24cd9f7e4c321ee726f238069baedfb0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFBVr-x8ahfyJgQCPUmwWBi1pzxaEChor3vFPMq1L-uqKcghT7--3Ot2DH6LY3o4YVAWHjPnd79Wbp2bzOCqd0ajcAtmiPzGi05oDX-5tnZ32IvdxiN9mJa~rkOO5rJW10DFHWcvgnvKj73VFUA0nPnDj90KOui8CUYiRFVIiiHeansGtMuMFh-iiVS65ojKXE-n2O3O3lLjfV8gVyPVKSDQIWAgfrrwT4-gcbcVwyXIagAkt8ruKSx9ag1EGsjJb5vRMqfglz4Sjcod7RMLl2A6uixzuRq7Q6VbvZYoSI9dH18~y5zkQLBOwDKUZwBG5hRShBhSZ4sOHlyxU~idbw__",
      style: "w-[156px] h-[58px]",
    },
    {
      id: 3,
      name: "Tech Mahindra",
      logo: "https://s3-alpha-sig.figma.com/img/f627/69f2/78e2934f131e1a318b5fe3a463305e92?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZuLjLadkLKfVYec3njuHlQ4vpbBzLXjlusTtIXCF~1aglA5LjiH6IidFyvwsJifDbeihMT364-xjL1jJVOQekdjAuMiolRGkPT4rdYX5IBvI4HKsY3xxOE1FRTfVw9q~1ksSzrBCJ1WTfe-0OLIQHaug1TwB8MaXSk1aa0ATBaQwY-J-FKtQHU8C8n0TgGnCPuuHooZ6pxk667j5D5biJXrZ9X0bRu1eXtTt8VNFEt8nDSoZe2DK1LBPnjWxNQdNIUls-dOhKNYCpbKz2utOlzzL2VDLr76tRaQnrSdJ8e5anmM27h1Bqv6SJE3ugLjbC24CRqI~xJ0Mxz~j9BiM7w__",
      style: "w-[203px] h-[58px]",
    },
    {
      id: 4,
      name: "Axis Bank",
      logo: "https://s3-alpha-sig.figma.com/img/ffbb/4280/ab0ca5790786ff4174d4ada7507f790f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkjXMwtrpetLBYkRG6elNf01iV18~n6DdqWP1wexVO-0wQXtOAgj6eQoQPDHEEkkvHJJUG2AXDR8OJz6jTD73Tut0HgJ4n3l8OgRr-ctdzFX~l3ZkPSP7iQt2C-sW-r3yxdqNU4JQavhKgcW~hL~~ZVg9lrLbS9T4rnj6yeIOvBDH1yC-lbPuQNcGCjls276iM7AaBCBRRnNDop5Xf8iURWzM~y-fSDjRR-BqcFgw4a4TemEHtpdD7DshsKZQQyieOu10Azdt8RLoOtkLZ8toTMruZhLBt~2pz0q0xhGcMnHr19QsrDjeauttSwtoAPvbiazJU7PDg-XeELGhGlbow__",
      style: "w-[205px] h-[103px]",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Some Of Our
              <br />
              Esteemed Recruiters
            </h2>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {recruiters.map((recruiter, index) => (
                <div
                  key={recruiter.id}
                  className="transform hover:scale-105 transition-transform duration-300"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.2}s both`,
                  }}
                >
                  <img
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className={`${recruiter.style} object-contain mx-auto`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RecruitersShowcase;
