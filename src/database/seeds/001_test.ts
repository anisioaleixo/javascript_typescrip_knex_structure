import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: null, name: "Anisio", },
        { id: null, name: "Aroudo" },
        { id: null, name: "Ambrozio" }
    ]);
};
