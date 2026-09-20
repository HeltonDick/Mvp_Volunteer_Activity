async function GetActivities() {
    const response = await fetch(
    'http://localhost:3000/activities',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch activities');
  }

  const activities = await response.json();
  return activities;
}

export default async function ActivitiesPage() {
    const activities = await GetActivities();

    return (
        <div>
      <h1>Atividades voluntárias</h1>

      {activities.map((activity: any) => (
        <div key={activity.id}>
          <h2>{activity.title}</h2>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>
  );
}