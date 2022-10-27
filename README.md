# Figma to Streamlit plugin

![Readme](https://user-images.githubusercontent.com/34423371/198327797-bca19428-b787-4d30-ac45-511f5805a5be.jpg)

A plugin to generate `st.` commands with their corresponding parameters and values, based on the components from [our existing Figma Design System](https://www.figma.com/community/file/1166786573904778097).

> **Warning**
> **Heads up!**
> This is an experiment from our design team. We’re releasing early to get feedback, and there’s [a lot of stuff missing](https://github.com/streamlit/figma-to-streamlit#roadmap). If you find this useful, please contribute! See our [contributing section](https://github.com/streamlit/figma-to-streamlit#contributing) below.

## Installation

Go to our [community profile](), select the plugin and hit `Try it out`. Then, in Figma, run it from the `Plugins` tab.

## How to use the plugin

This plugin is complementary to our [official Design System library](https://www.figma.com/community/file/1166786573904778097). Select a component instance, tweak its props and values, and hit `See my code` to get a code snippet you can use in your Streamlit app! Check out the video below to get a sense of how to use it 👇

https://user-images.githubusercontent.com/34423371/191323837-34a489a7-0534-49f7-b42f-1270ed1dc895.mov

## Troubleshooting

If you are running into any errors while using the plugin, check out the tips below to get unstuck:

### General Advice

* Make sure you're using our [official Design System library](https://www.figma.com/community/file/1166786573904778097) to generate your code snippets.
* Make sure to keep both the Design System library and the plugin up to date with the latest versions.
* The plugin is tightly bound to the Figma library's naming convention and layer structure, so we advise you to _avoid renaming layers_. Of course, you can update text values, change variations, but make sure layer names remain untouched.
* Make sure you are generating the code using component instances, and not from the main component. You can get a refresher on Figma's components and instances [here](https://help.figma.com/hc/en-us/articles/360039150173-Create-and-insert-component-instances).
* Do not detach the components.

### Plugin limitations and caveats

* In the spirit of releasing early and often, this plugin currently supports a subset of the full power from our open-source library. We're adding [support for new widgets and props](https://github.com/streamlit/figma-to-streamlit#roadmap) periodically, but you might hit an `unsupported widget` error with some of our Figma components. Feel free to [reach out](https://github.com/streamlit/figma-to-streamlit#submitting-an-issue) and let us know which widgets you'd like us to work on next!
* Similarly, a few of our components are too complex to edit in Figma and recreate their code (think charts, dataframes, tables). For those, we're using placeholder snippets, allowing you to implement a generic version of the widget in your app, with a limited set of functionality.

If you are still facing issues after reviewing the pointers above, feel free to [file an issue](https://github.com/streamlit/figma-to-streamlit#submitting-an-issue) and we'll try to get to it as soon as we can. Or even better, check out our [contributing guidelines](https://github.com/streamlit/figma-to-streamlit#contributing) and give it a try at fixing it yourself!

## Roadmap

### Supported features

The latest version of the plugin features support for the following widget categories:

* [Text elements](https://docs.streamlit.io/library/api-reference/text), except for `st.latex` and `st.markdown`.
* [Input widgets](https://docs.streamlit.io/library/api-reference/widgets), except for `st.select_slider`.
* [Native Chart elements](https://docs.streamlit.io/library/api-reference/charts) (that is, `st.line_chart`, `st.bar_chart`, `st.area_chart`, `st.map`)

> **Warning**
> **Friendly reminder:**
> Keep in mind this is an experiment from our design team. We’re releasing early to get feedback, and as you can see, there’s a lot of stuff missing. If you find the plugin useful, please contribute! See our [contributing section](https://github.com/streamlit/figma-to-streamlit#contributing) below.

### Upcoming releases

We're evaluating/planning on adding support for the following in the future (in no particular order):

#### More widgets
* [Media elements](https://docs.streamlit.io/library/api-reference/media).
* [Progress and Status](https://docs.streamlit.io/library/api-reference/status).
* [Data display elements](https://docs.streamlit.io/library/api-reference/data).
* [Layout and Containers](https://docs.streamlit.io/library/api-reference/layout).
* [Control flow](https://docs.streamlit.io/library/api-reference/control-flow) (mainly `st.form` and `st.form_submit_button`).

#### More variants/features
* `st.markdown`, recognizing **bold**, _italic_, underline and ~~strikethrough~~ text format.
* `label_visibility` param modifier for input widgets.
* Support for optional properties, such as `language` in `st.code`, `file_name` on `st.download_button`, amongst others.
* Global page config through [st.set_page_config](https://docs.streamlit.io/library/api-reference/utilities/st.set_page_config).
* Plugin settings, such as the ability to add optional arguments to your snippets, such as `key` or `anchor` for text elements, ability to toggle imports on/off, amongst others.

#### Other stuff
* Adding example callbacks for some input widgets, to extend their functionality.
* Refactoring, type annotations, an automated way to pipe widgets and data to the plugin, and a lot of other internal improvements.

Want to see something else added on this list? [File an issue](https://github.com/streamlit/figma-to-streamlit#submitting-an-issue) and let us know your ideas! We'll take a look and hopefully add it at some point to the roadmap.

## Submitting an issue

Do you have any ideas or improvements on what we currently support with the plugin? Or found a bug that you couldn't figure out with our [troubleshooting guide](https://github.com/streamlit/figma-to-streamlit#troubleshooting)? Want to ask us a question? Feel free to use our [issue tracker](https://github.com/streamlit/figma-to-streamlit/issues) to let us know, and we'll do our best to get to your question soon!

> **Warning**
> **Third time's a charm.**
> Remember, this is an experiment from our design team. We’re doing this on the side, along with the rest of our normal work stuff, so please be patient if you don't get a reply right away. And if you find the plugin useful, please contribute! See our [contributing section](https://github.com/streamlit/figma-to-streamlit#contributing) below.

## Contributing

Thanks for your interest in helping with this plugin's development! Please see the instructions below to install everything locally, and contributing guidelines.

### Guidelines

If your contribution is more than a few lines of code, then prior to starting to code on it please post in the issue saying you want to volunteer, and then wait for a positive response. And if there is no issue for it yet, create it first!

This helps make sure:
1. Two people aren't working on the same thing;
2. This is something maintainers believe should be implemented/fixed;
3. Any API, UI, or deeper architectural changes that need to be implemented have been fully thought through by our maintainers;
4. Your time is well spent!

Ready? Let's go! 🚀

### Running the plugin locally

Below are the steps to get the plugin running in your machine. You can also find more detailed instructions in [Figma's setup guide](https://www.figma.com/plugin-docs/setup/).

1. First, check if you have node installed on your machine by opening a terminal window and running:

```bash
node -v
```

2. If the command above outputs a version number, then you can safely skip this step. If you don't get anything back, or get a `node command not found` error, you need to download Node.js which comes with NPM. This will allow you to install TypeScript and other libraries. You can find the download link [here](https://nodejs.org/en/download/).
3. After installing Node, install Typescript by running the following command in a terminal window:

```bash
npm install -g typescript
```

4. After you've installed these global libraries, you need to clone the repo in your working directory:

```bash
git clone https://github.com/streamlit/figma-to-streamlit
```

5. Then, enter the `figma-to-streamlit` directory and `npm install` the plugin's dependencies:

```bash
cd figma-to-streamlit
npm install
```

6. After dependencies are installed, build the plugin by running:

```bash
npm run dev
```

If all goes well, you should see an output similar to the following on your Terminal 👇

![output 1](https://user-images.githubusercontent.com/34423371/191566540-48a72a0a-8da9-44c4-a229-b35f94b128ed.png)

Make sure to keep the process running while you are developing to automatically watch the files for changes.

### Loading the development version of the plugin in Figma

After you've completed the setup instructions above, it's time to run the plugin in Figma.

1. First, [Get the Figma desktop app](https://www.figma.com/downloads/) if you don't have it, since you need the desktop version to develop the plugin locally.
2. Log in to your Figma account and open the file editor in the Figma desktop app. You can open any existing document or create a new one.
3. Go to `Menu > Plugins > Development > Import plugin from manifest...`, find the `figma-to-streamlit` folder you've cloned above, locate the `manifest.json` file, and open it.
4. In the `plugins` tab, you should now see `Figma to Streamlit` under `Development`, and you can run it by hovering over it and clicking `Run`, or by going to `Menu > Plugins > Development > Figma to Streamlit`.
5. That's it! You might want to open the console tab by hitting `Cmd + Shift + I` as well, for easier development flow.

### License

This plugin is completely free and open-source, licensed under the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license.
