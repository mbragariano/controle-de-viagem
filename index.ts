import application from './src/infrastructure/presentation/server';

application.listen(3000, () => console.log('Server is running on port 3000.'));
