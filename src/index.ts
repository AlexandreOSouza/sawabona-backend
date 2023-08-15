import { AppDataSource } from "./database";
import { Client } from "./entity/Client";
import { Project } from "./entity/Project";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const project = new Project();
    project.name = "project1";
    project.desc = "test desc";

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.name = "Team 1";
    user.email = "team1@team.com";
    user.projects = [project];

    project.team = [user];
    await AppDataSource.manager.save(user);
    await AppDataSource.manager.save(project);

    console.log("Saved a new user with id: " + user.id);

    const client = new Client();
    client.name = "clint 1";
    client.projects = [project];
    client.email = "client@email.com";

    project.client = client;

    await AppDataSource.manager.save(client);
  })
  .catch((error) => console.log(error));
