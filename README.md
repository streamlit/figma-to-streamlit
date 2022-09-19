# Figma to Streamlit plugin

![Intro image](https://user-images.githubusercontent.com/34423371/191044666-55e3cf5f-ce1e-4f43-b0ad-f4ff1d8a9c82.png)

A plugin to generate `st.` commands with their corresponding parameters and values, based on the components from [our existing Figma library]().

> **Note**
> **Heads up!**
> This is an experiment from our design team. We’re releasing early to get feedback, and there’s [a lot of stuff missing](https://github.com/streamlit/figma-to-streamlit#roadmap). If you find this useful, please contribute! See our [contributing section](https://github.com/streamlit/figma-to-streamlit#contributing) below.

## Installation

Go to our [community profile]() and hit `Try it out`. Then, in Figma, run it from the `Plugins` tab.

## Contributing

Thanks for your interest in helping with this plugin's development! Please see the instructions below to intall it locally, and contributing guidelines.

### Running the plugin locally

> **Note**
> Below are the steps to get your plugin running in your machine. You can also find more detailed instructions in [Figma's setup guide](https://www.figma.com/plugin-docs/setup/).

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

1. First, download Node.js which comes with NPM. This will allow you to install TypeScript and other libraries. You can find the download link [here](https://nodejs.org/en/download/).
2. Second, install Typescript: `npm install -g typescript`.
3. Then, clone the repo: `git clone https://github.com/streamlit/figma-to-streamlit`.
4. `cd` into the `figma-to-streamlit` directory, and run `npm install`.
5. After you've installed the dependencies, run `npm run dev` on your terminal, to build the plugin.

### Loading the development version of the plugin in Figma
