**Reflection**
This assignment has been a meaningful learning experience, particularly in understanding the real-world challenges and considerations involved in building, managing, and maintaining an open-source software repository. Through the various tasks ranging from code design, CI/CD integration, REST API development, to community contribution and collaboration. I have gained deeper insight into both the technical and social dynamics of software engineering.

1. Improvements Based on Peer Feedback and Assignment Specifications
One of the most significant improvements I need to make to the repository comes after receiving peer feedback regarding the project’s structure and testing strategy. Initially, the test scripts are scattered and not well organized, and some of the key entities lacks proper service or integration tests. Based on this input, I will reorganize the project directory to clearly separate entities, repositories, services, api, and unit_tests. I will also ensure each entity has a corresponding service class and in-memory repository with a set of unit tests, improving maintainability and scalability.

Additionally, I implemented clearer naming conventions and refactored redundant logic to align with best practices. 

The assignment specifications also prompted me to add several critical improvements. For example, I updated the README.md to include a comprehensive “Getting Started” section, ensuring that any new developer or contributor could clone the repository, install dependencies, and run tests or the application without confusion. Furthermore, I created a CONTRIBUTING.md file to outline coding standards, test expectations, and contribution workflows. This not only improved the professionalism of the repository but also made it more inviting to potential contributors.

CI/CD automation was another area of improvement. I implemented a GitHub Actions workflow that runs unit tests automatically on every push or pull request. This built trust in the codebase and ensured early detection of potential regressions.

2. Challenges in Onboarding Contributors
One of the main challenges I faced was anticipating what contributors would struggle with when joining the project. Without adequate documentation or onboarding support, it’s easy for a new contributor to get lost especially in a project with abstract concepts like repositories and service layers.

Another issue was aligning on coding style. Despite using tools like Prettier or ESLint, differences in formatting and structure occasionally led to inconsistencies. I realized that pre-commit hooks and strict CI checks can help enforce consistency but must be clearly documented and integrated early.

Setting up meaningful issues was also tricky. To ease onboarding, I will begin tagging issues with labels like good-first-issue and feature-request, to offer clear descriptions and expected outcomes. This will help break down work into manageable chunks and improve the overall contributor experience.

3. Lessons Learned About Open-Source Collaboration
This experience taught me that open-source collaboration goes far beyond just writing functional code. It’s about fostering a shared understanding, reducing barriers to entry, and designing systems that welcome participation.

I learned that automation builds trust and reliability, while structure and documentation create an inclusive and scalable project. Most importantly, I learned that communication through issues, pull requests, and documentation is what transforms code into a collaborative effort. By combining these principles, I was able to create a more robust, accessible, and community-friendly project.