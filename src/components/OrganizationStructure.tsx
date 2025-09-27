import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Mail, Linkedin } from 'lucide-react';

interface Member {
  name: string;
  position: string;
  department: string;
  email: string;
  image: string;
  level: number;
  description: string;
}

export function OrganizationStructure() {
  const members: Member[] = [
    {
      name: 'Dr. Ahmad Wijaya',
      position: 'Chief Executive Officer',
      department: 'Executive',
      email: 'ahmad.wijaya@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODY4NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 1,
      description: 'Memimpin visi strategis dan mengawasi operasional perusahaan secara keseluruhan.'
    },
    {
      name: 'Sarah Kusuma',
      position: 'Chief Technology Officer',
      department: 'Technology',
      email: 'sarah.kusuma@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc1ODcwMDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 2,
      description: 'Bertanggung jawab atas pengembangan teknologi dan inovasi produk.'
    },
    {
      name: 'Budi Santoso',
      position: 'Chief Operating Officer',
      department: 'Operations',
      email: 'budi.santoso@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODY4NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 2,
      description: 'Mengelola operasional harian dan memastikan efisiensi proses bisnis.'
    },
    {
      name: 'Maria Sari',
      position: 'Head of Human Resources',
      department: 'HR',
      email: 'maria.sari@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc1ODcwMDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 2,
      description: 'Mengelola pengembangan SDM dan budaya organisasi.'
    },
    {
      name: 'Rizki Pratama',
      position: 'Senior Software Engineer',
      department: 'Technology',
      email: 'rizki.pratama@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODY4NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 3,
      description: 'Mengembangkan solusi software dan memimpin tim development.'
    },
    {
      name: 'Dewi Lestari',
      position: 'Project Manager',
      department: 'Operations',
      email: 'dewi.lestari@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc1ODcwMDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 3,
      description: 'Mengelola dan mengkoordinasikan proyek-proyek teknologi.'
    },
    {
      name: 'Andi Firmansyah',
      position: 'UX/UI Designer',
      department: 'Technology',
      email: 'andi.firmansyah@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODY4NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 3,
      description: 'Merancang pengalaman dan antarmuka pengguna yang intuitif.'
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Business Analyst',
      department: 'Operations',
      email: 'siti.nurhaliza@innovatetech.id',
      image: 'https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc1ODcwMDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 3,
      description: 'Menganalisis kebutuhan bisnis dan merancang solusi optimal.'
    }
  ];

  const getDepartmentColor = (department: string) => {
    const colors = {
      'Executive': 'bg-purple-100 text-purple-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Operations': 'bg-green-100 text-green-800',
      'HR': 'bg-orange-100 text-orange-800'
    };
    return colors[department as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const groupedMembers = {
    level1: members.filter(m => m.level === 1),
    level2: members.filter(m => m.level === 2),
    level3: members.filter(m => m.level === 3)
  };

  return (
    <section id="structure" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Struktur Organisasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tim profesional kami yang berpengalaman dan berkomitmen untuk memberikan 
            hasil terbaik dalam setiap proyek.
          </p>
        </div>

        {/* Level 1 - CEO */}
        <div className="flex justify-center mb-12">
          {groupedMembers.level1.map((member, index) => (
            <Card key={index} className="w-full max-w-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-lg">{getInitials(member.name)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <Badge className={getDepartmentColor(member.department)}>{member.department}</Badge>
                <p className="text-muted-foreground text-sm mt-3 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-2">
                  <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Level 2 - C-Level & Department Heads */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {groupedMembers.level2.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.position}</p>
                <Badge className={getDepartmentColor(member.department)} variant="secondary">
                  {member.department}
                </Badge>
                <p className="text-muted-foreground text-sm mt-3 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-2">
                  <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Level 3 - Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groupedMembers.level3.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <Avatar className="w-16 h-16 mx-auto mb-3">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-sm">{getInitials(member.name)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
                <p className="text-primary text-xs font-medium mb-2">{member.position}</p>
                <Badge className={getDepartmentColor(member.department)} variant="secondary" size="sm">
                  {member.department}
                </Badge>
                <p className="text-muted-foreground text-xs mt-2 mb-3">{member.description}</p>
                <div className="flex justify-center space-x-2">
                  <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-3 w-3" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organization Chart */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Bagan Organisasi</h3>
          <div className="text-center">
            <div className="inline-block">
              {/* CEO Level */}
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg mb-6">
                <div className="font-semibold">CEO</div>
                <div className="text-sm">Dr. Ahmad Wijaya</div>
              </div>
              
              {/* Line from CEO */}
              <div className="w-px h-8 bg-gray-300 mx-auto mb-4"></div>
              
              {/* C-Level */}
              <div className="flex justify-center space-x-8 mb-6">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                  <div className="font-semibold text-sm">CTO</div>
                  <div className="text-xs">Sarah Kusuma</div>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  <div className="font-semibold text-sm">COO</div>
                  <div className="text-xs">Budi Santoso</div>
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg">
                  <div className="font-semibold text-sm">Head of HR</div>
                  <div className="text-xs">Maria Sari</div>
                </div>
              </div>
              
              {/* Lines from C-Level */}
              <div className="grid grid-cols-3 gap-8 mb-4">
                <div className="w-px h-8 bg-gray-300 mx-auto"></div>
                <div className="w-px h-8 bg-gray-300 mx-auto"></div>
                <div className="w-px h-8 bg-gray-300 mx-auto"></div>
              </div>
              
              {/* Team Members */}
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs">
                    Senior Software Engineer
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs">
                    UX/UI Designer
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded text-xs">
                    Project Manager
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded text-xs">
                    Business Analyst
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded text-xs">
                    HR Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}