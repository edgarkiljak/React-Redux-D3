const mockDataObj = {
  id: 'e837c9f5-247f-445f-bcc1-7d434348336b',
  serverName: 'kubernetes-dashboard',
  node: 'Minikube',
  status: 'Running',
  restarts: 0,
  age: 27,
  cpu: [
    {
      date: new Date(),
      high: 0.12,
      low: 20
    }
  ],
  memory: [
    {
      date: new Date(),
      high: 570,
      low: 20
    }
  ],
  runningTasks: [
    {
      status: 'Running',
      label: 'task-label',
      age: 23,
      name: 'task-one',
      clusterIP: '10.148.0.3',
      cpuUsage: [
        {
          date: new Date(),
          high: 0.12,
          low: 20
        }
      ],
      memoryUsage: [
        {
          date: new Date(),
          high: 100,
          low: 20
        }
      ]
    }
  ]
};

describe('data test', () => {
  it('object have properties', () => {
    expect(mockDataObj).toHaveProperty(
      'id',
      'label',
      'age',
      'name',
      'clusterIP',
      'cpuUsage',
      'memoryUsage'
    );
  });

  it('object structure', () => {
    expect(mockDataObj).toMatchSnapshot({
      id: expect.any(String),
      serverName: expect.any(String),
      node: expect.any(String),
      status: expect.any(String),
      restarts: expect.any(Number),
      age: 27,
      cpu: [
        {
          date: expect.any(Date),
          high: expect.any(Number),
          low: expect.any(Number)
        }
      ],
      memory: [
        {
          date: expect.any(Date),
          high: expect.any(Number),
          low: expect.any(Number)
        }
      ],
      runningTasks: [
        {
          status: expect.any(String),
          label: expect.any(String),
          age: expect.any(Number),
          name: expect.any(String),
          clusterIP: expect.any(String),
          cpuUsage: [
            {
              date: expect.any(Date),
              high: expect.any(Number),
              low: expect.any(Number)
            }
          ],
          memoryUsage: [
            {
              date: expect.any(Date),
              high: expect.any(Number),
              low: expect.any(Number)
            }
          ]
        }
      ]
    });
  });
});
