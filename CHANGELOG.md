# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.0-rc1.0"></a>
# [1.0.0-rc1.0](https://github.com/aberezkin/ng2-image-upload/compare/v1.0.0-rc.1...v1.0.0-rc1.0) (2019-01-26)


### Bug Fixes

* include error information on the uploadStateChanged event ([#237](https://github.com/aberezkin/ng2-image-upload/issues/237)) ([6bc3aae8ab724460830edb81bc42f1b0069130ea](https://github.com/hugobarona/ng2-image-upload/commit/6bc3aae8ab724460830edb81bc42f1b0069130ea))
* delete image error ([#211](https://github.com/aberezkin/ng2-image-upload/issues/211)) ([47c6099](https://github.com/aberezkin/ng2-image-upload/commit/47c6099))
* emit uploadStateChanged when file upload fails due to size ([#212](https://github.com/aberezkin/ng2-image-upload/issues/212)) ([30e5f37](https://github.com/aberezkin/ng2-image-upload/commit/30e5f37))
* fixed FileHolder.serverResponse not being set correctly ([59017db](https://github.com/aberezkin/ng2-image-upload/commit/59017db)), closes [#142](https://github.com/aberezkin/ng2-image-upload/issues/142)
* hide upload button when reaches to max images ([#145](https://github.com/aberezkin/ng2-image-upload/issues/145)) ([#147](https://github.com/aberezkin/ng2-image-upload/issues/147)) ([6e733cd](https://github.com/aberezkin/ng2-image-upload/commit/6e733cd))
* Parameter 'UploadMetadata' implicitly has an 'any' type. [#154](https://github.com/aberezkin/ng2-image-upload/issues/154) ([#155](https://github.com/aberezkin/ng2-image-upload/issues/155)) ([e32ff88](https://github.com/aberezkin/ng2-image-upload/commit/e32ff88))
* url changed by onBeforeUpload is ignored ([#182](https://github.com/aberezkin/ng2-image-upload/issues/182)) ([89a891b](https://github.com/aberezkin/ng2-image-upload/commit/89a891b))


### Features

* added previewClicked output property ([#188](https://github.com/aberezkin/ng2-image-upload/issues/188)) ([46df3a9](https://github.com/aberezkin/ng2-image-upload/commit/46df3a9))
* support for angular 6 & 7 ([#220](https://github.com/aberezkin/ng2-image-upload/issues/220)) ([3ce5d98](https://github.com/aberezkin/ng2-image-upload/commit/3ce5d98))
* **input:** interface for disabling clear and upload ([#148](https://github.com/aberezkin/ng2-image-upload/issues/148)) ([caa6817](https://github.com/aberezkin/ng2-image-upload/commit/caa6817))



<a name="1.0.0-rc.1"></a>
# [1.0.0-rc.1](https://github.com/aberezkin/ng2-image-upload/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2018-04-16)



<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/aberezkin/ng2-image-upload/compare/v0.6.5...v1.0.0-rc.0) (2017-09-28)


### Bug Fixes

* **css:** prefix all classes to prevent external style cascading ([#114](https://github.com/aberezkin/ng2-image-upload/issues/114)) ([277bcf7](https://github.com/aberezkin/ng2-image-upload/commit/277bcf7))
* **dependencies:** add http module to imports ([24ee042](https://github.com/aberezkin/ng2-image-upload/commit/24ee042)), closes [#80](https://github.com/aberezkin/ng2-image-upload/issues/80)
* **input:** fixed extensions not working when not specified ([#83](https://github.com/aberezkin/ng2-image-upload/issues/83)) ([204ab16](https://github.com/aberezkin/ng2-image-upload/commit/204ab16)), closes [#82](https://github.com/aberezkin/ng2-image-upload/issues/82)
* **output:** emit onRemove when all files are cleared ([#85](https://github.com/aberezkin/ng2-image-upload/issues/85)) ([f4b4c05](https://github.com/aberezkin/ng2-image-upload/commit/f4b4c05)), closes [#84](https://github.com/aberezkin/ng2-image-upload/issues/84)


### Chores

* **api:** made api conform to angular conventions ([#87](https://github.com/aberezkin/ng2-image-upload/issues/87)) ([29d288e](https://github.com/aberezkin/ng2-image-upload/commit/29d288e))


### Features

* **input:** added the ability to pass a beforeUpload function that can modify each file/url or abort entirely ([#101](https://github.com/aberezkin/ng2-image-upload/issues/101)) ([9a883b8](https://github.com/aberezkin/ng2-image-upload/commit/9a883b8)), closes [#59](https://github.com/aberezkin/ng2-image-upload/issues/59)
* **input:** allow clear button text to be customised ([#100](https://github.com/aberezkin/ng2-image-upload/issues/100)) ([df66c86](https://github.com/aberezkin/ng2-image-upload/commit/df66c86)), closes [#97](https://github.com/aberezkin/ng2-image-upload/issues/97)
* allow custom form data ([098febd](https://github.com/aberezkin/ng2-image-upload/commit/098febd))
* allow custom styling - fixes [#93](https://github.com/aberezkin/ng2-image-upload/issues/93) ([#116](https://github.com/aberezkin/ng2-image-upload/issues/116)) ([a1aa8f4](https://github.com/aberezkin/ng2-image-upload/commit/a1aa8f4))
* retrieve files on open ([#130](https://github.com/aberezkin/ng2-image-upload/issues/130)) ([45e4472](https://github.com/aberezkin/ng2-image-upload/commit/45e4472))


### BREAKING CHANGES

* **api:** `headers` now accepts a map instead of an array.

Typescript signature: `[name: string]: any;`
* **api:** `onFileUploadFinish` renamed to `uploadFinished`
* **api:** `onRemove` renamed to `removed`
* **api:** `isPending` renamed to `uploadStateChanged`



<a name="0.6.5"></a>
## [0.6.5](https://github.com/aberezkin/ng2-image-upload/compare/v0.6.4...v0.6.5) (2017-07-01)


### Bug Fixes

* **dependencies:** add http module to imports ([24ee042](https://github.com/aberezkin/ng2-image-upload/commit/24ee042)), closes [#80](https://github.com/aberezkin/ng2-image-upload/issues/80)
* **input:** fixed extensions not working when not specified ([#83](https://github.com/aberezkin/ng2-image-upload/issues/83)) ([204ab16](https://github.com/aberezkin/ng2-image-upload/commit/204ab16)), closes [#82](https://github.com/aberezkin/ng2-image-upload/issues/82)
* **output:** emit onRemove when all files are cleared ([#85](https://github.com/aberezkin/ng2-image-upload/issues/85)) ([f4b4c05](https://github.com/aberezkin/ng2-image-upload/commit/f4b4c05)), closes [#84](https://github.com/aberezkin/ng2-image-upload/issues/84)
