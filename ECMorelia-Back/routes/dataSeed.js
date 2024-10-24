const databaseData = {
  doctor: [
    {
      id_doctor: 1,
      nombre: 'Juan',
      apellidos: 'Pérez',
      licencia_medica: 'LM123456',
      password: 'hashed_password_1'
    },
    {
      id_doctor: 2,
      nombre: 'María',
      apellidos: 'González',
      licencia_medica: 'LM654321',
      password: 'hashed_password_2'
    }
  ],
  hospitales: [
    {
      id_hospitales: 1,
      nombre: 'Hospital General',
      direccion: 'Calle Principal 123',
      password: 'hashed_password_1'
    },
    {
      id_hospitales: 2,
      nombre: 'Clinica Salud',
      direccion: 'Avenida Central 456',
      password: 'hashed_password_2'
    }
  ],
  operador: [
    {
      id: 1,
      nombre: 'Carlos',
      licencia_medica: 'LM987654',
      password: 'hashed_password_1'
    }
  ],
  paramedicos: [
    {
      id_paramedicos: 1,
      nombre: 'Ana',
      apellidos: 'López',
      licencia_medica: 'LM135791',
      certificado: 'Certificado A',
      licencia_conducir: 'LC12345',
      password: 'hashed_password_1'
    },
    {
      id_paramedicos: 2,
      nombre: 'Luis',
      apellidos: 'Martínez',
      licencia_medica: 'LM246802',
      certificado: 'Certificado B',
      licencia_conducir: 'LC54321',
      password: 'hashed_password_2'
    }
  ],
  ambulancias: [
    {
      numero_placa_sm: 1,
      id_paramedicos: 1,
      id_hospitales: 1
    },
    {
      numero_placa_sm: 2,
      id_paramedicos: 2,
      id_hospitales: 2
    }
  ],
  ambulancias_doctor: [
    {
      id_doctor: 1,
      numero_placa_sm: 1,
      reporte_doctor: 'Atención a paciente en estado crítico.'
    }
  ],
  ambulancias_hospitales: [
    {
      id_hospitales: 1,
      numero_placa_sm: 1,
      reporte_servicio: 'Servicio de emergencia realizado.'
    }
  ],
  ambulancias_paramedicos: [
    {
      id_ambulancias_paramedicos: 1,
      id_paramedicos: 1,
      numero_placa_sm: 1,
      reporte_inicial: 'Paciente con dificultad respiratoria.',
      fecha: new Date(),
      estado: 'En servicio'
    }
  ]
}

module.exports = databaseData
