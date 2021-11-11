---
eleventyNavigation:
  key: Background Cells
  parent: Components
layout: layout.njk
title: Background Cells
permalink: components/ld-bg-cells/
---

<!-- <link rel="stylesheet" href="/css_components/ld-bg-cells.css"> -->
<!-- <link rel="stylesheet" href="/css_components/ld-typo.css"> -->

# ld-bg-cells

A background pattern with the Merck cells as additional visual element.

---

## Default

{% example %}
<ld-bg-cells class="box1-16/9"></ld-bg-cells>

<style>
  .box1-16\/9 {
    padding-top: 56.25%;
  }
</style>
{% endexample %}

<!-- CSS component -->

<!-- <div class="ld-bg-cells ld-bg-cells--safc box1-16/9">
  <div class="ld-bg-cells__pattern"></div>
</div>

<style>
  .box1-16\/9 {
    padding-top: 56.25%;
  }
</style> -->

## Cell types

{% example %}
<ld-bg-cells type="bioreliance" class="box2-16/9">
  <ld-typo>type: bioreliance</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="f" class="box2-16/9">
  <ld-typo>type: f</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="hexagon" class="box2-16/9">
  <ld-typo>type: hexagon</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="millipore" class="box2-16/9">
  <ld-typo>type: millipore</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="qa-x2f-qc" class="box2-16/9">
  <ld-typo>type: qa-x2f-qc</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="safc" class="box2-16/9">
  <ld-typo>type: safc</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="sigma-aldrich" class="box2-16/9">
  <ld-typo>type: sigma-aldrich</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="t" class="box2-16/9">
  <ld-typo>type: t</ld-typo>
</ld-bg-cells>
<ld-bg-cells type="tile" class="box2-16/9">
  <ld-typo>type: tile</ld-typo>
</ld-bg-cells>

<style>
  .box2-16\/9 {
    height: 12.3046875rem;
    width: 21.875rem;
  }

  .box2-16\/9 .ld-bg-cells__content {
    align-items: center;
    color: var(--ld-col-wht);
    display: flex;
    justify-content: center;
  }
</style>
{% endexample %}

<!-- CSS component -->

<!-- <div class="ld-bg-cells ld-bg-cells--bioreliance box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: bioreliance</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--f box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: f</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--hexagon box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: hexagon</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--millipore box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: millipore</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--qa-x2f-qc box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: qa-x2f-qc</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--safc box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: safc</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--sigma-aldrich box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: sigma-aldrich</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--t box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: t</p>
  </div>
</div>
<div class="ld-bg-cells ld-bg-cells--tile box2-16/9">
  <div class="ld-bg-cells__pattern"></div>
  <div class="ld-bg-cells__content">
    <p class="ld-typo">type: tile</p>
  </div>
</div>

<style>
  .box2-16\/9 {
    height: 12.3046875rem;
    width: 21.875rem;
  }

  .box2-16\/9 .ld-bg-cells__content {
    align-items: center;
    color: var(--ld-col-wht);
    display: flex;
    justify-content: center;
  }
</style> -->

## Custom position, size and colors

{% example %}
<ld-bg-cells class="box3-16/9"></ld-bg-cells>

<style>
  .box3-16\/9 {
    --ld-bg-cells-bg-col: var(--ld-col-vm-300);
    --ld-bg-cells-pattern-col: var(--ld-col-vm-600);
    --ld-bg-cells-position: bottom left;
    --ld-bg-cells-size: 150%;

    padding-top: 56.25%;
  }
</style>
{% endexample %}

<!-- CSS component -->

<!-- <div class="ld-bg-cells ld-bg-cells--safc box3-16/9">
  <div class="ld-bg-cells__pattern"></div>
</div>

<style>
  .box3-16\/9 {
    --ld-bg-cells-bg-col: var(--ld-col-vm-300);
    --ld-bg-cells-pattern-col: var(--ld-col-vm-600);
    --ld-bg-cells-position: bottom left;
    --ld-bg-cells-size: 150%;

    padding-top: 56.25%;
  }
</style> -->

## CSS Variables

| Variable                         | Description                                                   | Default                              |
| -------------------------------- | ------------------------------------------------------------- | ------------------------------------ |
| `--ld-bg-cells-bg-col` | Background color                                              | Primary color of the current theme   |
| `--ld-bg-cells-pattern-col` | Pattern color (cells)                                      | Secondary color of the current theme |
| `--ld-bg-cells-position`         | Position of the cells                                         | Individual per cell type             |
| `--ld-bg-cells-size`             | Size of the cells                                             | Individual per cell type             |


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                              | Type                                                                                                            | Default     |
| -------- | --------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------- |
| `key`    | `key`     | for tracking the node's identity when working with lists | `string \| number`                                                                                              | `undefined` |
| `ref`    | `ref`     | reference to component                                   | `any`                                                                                                           | `undefined` |
| `type`   | `type`    | Cells pattern                                            | `"bioreliance" \| "f" \| "hexagon" \| "millipore" \| "qa-x2f-qc" \| "safc" \| "sigma-aldrich" \| "t" \| "tile"` | `'safc'`    |


## Shadow Parts

| Part        | Description                          |
| ----------- | ------------------------------------ |
| `"content"` | Element wrapping the slot            |
| `"pattern"` | Element containing the cells pattern |


----------------------------------------------

 