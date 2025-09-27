import { Card, CardContent } from './ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Misi Kami',
      description: 'Mengembangkan potensi siswa melalui kegiatan yang inovatif dan bermanfaat, serta menjadi wadah aspirasi dan kreativitas siswa MAN 1 Model Bengkulu.'
    },
    {
      icon: Eye,
      title: 'Visi Kami',
      description: 'Menjadi organisasi siswa yang unggul, kreatif, dan berakhlak mulia dalam membentuk generasi pemimpin masa depan yang berkarakter islami.'
    },
    {
      icon: Award,
      title: 'Nilai Kami',
      description: 'Religius, jujur, tanggung jawab, disiplin, kerja keras, kreatif, mandiri, demokratis, dan cinta tanah air.'
    },
    {
      icon: Users,
      title: 'Pengurus Kami',
      description: 'Terdiri dari siswa-siswi pilihan yang berprestasi dan berkomitmen untuk mengabdi kepada sekolah dan sesama siswa.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tentang OSIS MAN 1 Model Bengkulu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organisasi Siswa Intra Sekolah MAN 1 Model Bengkulu adalah wadah untuk mengembangkan 
            bakat, minat, dan kreativitas siswa serta membangun karakter kepemimpinan yang islami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Keunggulan OSIS Kami
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Program kerja yang inovatif dan bermanfaat
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Pengurus yang amanah dan berprestasi
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Kegiatan yang mengembangkan karakter islami
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Wadah aspirasi dan kreativitas siswa
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-muted-foreground">Siswa Aktif</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Pengurus Inti</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Program Kerja</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Ekstrakurikuler</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}