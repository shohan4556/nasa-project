const request = require('supertest');
const app = require('../../app');

describe('test All Launches', () => {
    test('GET all launches, should return 200 status code', async () => {
        // app = express(); needs to pass as supertest request
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /application\/json/)
            .expect(200);
        // expect(response.status).toBe(200);
    });

    test('POST /launches add new launch return 200 status code', async () => {
        const requestDate = new Date('January 4, 2030');
        // console.log('Request Date:', requestDate);

        const response = await request(app)
            .post('/launches')
            .send({
                mission: 'My mission',
                rocket: 'SpaceX 2XAV',
                target: 'Kepler 102',
                launchDate: requestDate,
            })
            .expect('Content-Type', /json/)
            .expect(201);

        expect(response.body).toMatchObject({
            mission: 'My mission',
            rocket: 'SpaceX 2XAV',
            target: 'Kepler 102',
            launchDate: response.body.launchDate,
        });
    });
});
