document.addEventListener('DOMContentLoaded', () => {
  const sampleAchievements = [
    {
      id: 1,
      title: "AI-Powered Robot",
      student_id: "ST12345",
      date: "2024-10-12",
      description: "Created a robot for real-time object detection."
    },
    {
      id: 2,
      title: "Eco-Friendly Packaging",
      student_id: "ST67890",
      date: "2024-11-05",
      description: "Developed biodegradable packaging for consumer goods."
    }
  ];
  displayPendingAchievements(sampleAchievements);
});
