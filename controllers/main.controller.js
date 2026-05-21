app.controller('MainController', function ($scope) {

    $scope.title = "Lince Technology";
    $scope.message = "Soluciones tecnológicas modernas";

    $scope.company = {
        about: 'En Lince Technology ayudamos a las empresas a acelerar su transformación digital mediante automatización de procesos, consultoría tecnológica y desarrollo de software a la medida. Diseñamos soluciones que aumentan la eficiencia operativa, reducen costes y mejoran la experiencia de usuario. Nuestra propuesta combina precisión técnica, planificación rigurosa y resiliencia operativa para entregar resultados confiables y medibles.',
        mision: 'Proveer soluciones tecnológicas confiables y a la medida que impulsen la transformación digital de nuestros clientes.',
        vision: 'Ser el socio tecnológico de referencia en la región, reconocido por la calidad y compromiso.',
        values: ['Precisión', 'Certeza', 'Confianza', 'Resiliencia', 'Innovación']
    };

    $scope.services = [
        {
            title: 'Desarrollo a la medida',
            desc: 'Aplicaciones web y móviles diseñadas para sus procesos y objetivos de negocio.',
            img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60'
        },
        {
            title: 'Outsourcing & Soporte',
            desc: 'Equipos dedicados y soporte remoto para mantener su operación disponible.',
            img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60'
        },
        {
            title: 'Infraestructura (Nube / On-prem)',
            desc: 'Diseño, implementación y administración de infraestructura en nube o en sitio.',
            img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60'
        }
        ,{
            title: 'Seguridad y CloudOps',
            desc: 'Servicios de seguridad, auditoría y operaciones en la nube para mantener sus sistemas protegidos.',
            img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60'
        },{
            title: 'Data & Analytics',
            desc: 'Integración, almacenamiento y análisis de datos para obtener insights accionables.',
            img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=60'
        }
    ];

    $scope.team = [
        { name: 'Lorenzo Díaz', role: 'CTO / Arquitecto de Soluciones', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=60' },
        { name: 'Ana Gómez', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60' },
        { name: 'Carlos Pérez', role: 'Ingeniero DevOps', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=60' },
        { name: 'María Ruiz', role: 'Consultora de Transformación', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=60' }
    ];

});