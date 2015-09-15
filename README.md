# styles-to-less
Converts Styles Metadata.json to LESS Variable file

### How to use

 - Download the TDK, and get it working
 - Pull this code into public/plugins/ directory
 - One first time run: npm install
 - To generate styles less file: grunt build --template=template-directory

The template option is the directory name in the TDK folder i.e. --template=my-template would look for template/my-template/

There must be `styles` attribute in the template. If found it will create a file called `bk-v8-test.less` in the template's top level directory. This should be included at the top of the `stylesheet.less`

Very important note: Remember to take this file out of the repository and remove the reference in stylesheet.less when committing the template. This file is only used for test purposes.