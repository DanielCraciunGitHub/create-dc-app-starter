#!/usr/bin/env node

const { execSync } = require("child_process")
const fs = require("fs")

const executeCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" })
  } catch (error) {
    console.error(`Failed to execute ${command}`, e)
    return false
  }
  return true
}

const projectFolder = process.argv[2]

const gitCheckoutCommand = `git clone --depth 1 https://github.com/DanielCraciunGitHub/create-dc-app-starter ${projectFolder}`
const installDepsCommand = `cd ${projectFolder} && bun install`

console.log(`Cloning the repository with name ${projectFolder}`)
const checkedOut = executeCommand(gitCheckoutCommand)
if (!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${projectFolder}`)
const installedDeps = executeCommand(installDepsCommand)
if (!installedDeps) process.exit(-1)

fs.writeFileSync(
  `${projectFolder}/.env.local`,
  "#PlanetScale\nPLANET_SCALE_DATABASE_URL=[DATABASE-URL]"
)

console.log(
  "Congratulations! Follow the following commands to start developing"
)
console.log(`cd ${projectFolder} && bun dev`)
