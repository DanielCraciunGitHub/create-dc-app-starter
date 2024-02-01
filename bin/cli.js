#!/usr/bin/env node

const { execSync } = require("child_process")
const fs = require("fs")
const prompt = require("prompt-sync")()

const readline = require("readline")

const envLocalFile = `
#Auth.js
AUTH_SECRET=<RANDOM-GENERATED-STRING>
  
# Google OAuth Credentials
AUTH_GOOGLE_ID=<GOOGLE-CLOUD-CONSOLE>
AUTH_GOOGLE_SECRET=<GOOGLE-CLOUD-CONSOLE>

# PlanetScale
PLANET_SCALE_DATABASE_URL=mysql://<USERNAME>:<PASSWORD>@aws.connect.psdb.cloud/<DB-NAME>?ssl={"rejectUnauthorized":true}
`

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function selectPackageManager() {
  const packageManagerPrompt = `
Select a package manager:

1. npm
2. yarn
3. pnpm
4. bun

`
  let choice = prompt(packageManagerPrompt)

  choice = parseInt(choice)
  if (choice === 1) {
    return "npm"
  } else if (choice === 2) {
    return "yarn"
  } else if (choice === 3) {
    return "pnpm"
  } else if (choice === 4) {
    return "bun"
  } else {
    throw new Error("Invalid Choice")
  }
}

const executeCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit", killSignal: "SIGINT" })
  } catch (error) {
    console.error(`Failed to execute ${command}`, e)
    return false
  }
  return true
}

try {
  const packageManager = selectPackageManager()
  const projectFolder = process.argv[2]
  const gitCheckoutCommand = `git clone --depth 1 https://github.com/DanielCraciunGitHub/create-dc-app-starter ${projectFolder}`
  const installDepsCommand = `cd ${projectFolder} && ${packageManager} install`

  console.log(`Cloning the repository with name ${projectFolder}`)
  const checkedOut = executeCommand(gitCheckoutCommand)
  if (!checkedOut) process.exit(-1)

  console.log(`Installing dependencies for ${projectFolder}`)
  const installedDeps = executeCommand(installDepsCommand)
  if (!installedDeps) process.exit(-1)

  fs.writeFileSync(`${projectFolder}/.env.local`, envLocalFile)
  console.log(
    "Congratulations! Follow the following commands to start developing"
  )
  console.log(`cd ${projectFolder} && ${packageManager} dev`)
} catch (error) {
  console.error(error.message)
} finally {
  rl.close()
}
