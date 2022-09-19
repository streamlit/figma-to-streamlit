export const data = [
  // Write and magic
  {
    "category": "write-and-magic",
    "name": "st.write",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "args",
        "type": "any",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "unsafe_allow_html",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  // Text widgets
  {
    "category": "text",
    "name": "st.title",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "anchor",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.header",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "anchor",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.subheader",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "anchor",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.caption",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "unsafe_allow_html",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.markdown",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "unsafe_allow_html",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "text",
    "name": "st.text",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
    ]
  },
  {
    "category": "text",
    "name": "st.latex",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
    ]
  },
  {
    "category": "text",
    "name": "st.code",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "body",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "language",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
    ]
  },
  // Input widgets
  {
    "category": "widgets",
    "name": "st.button",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_click",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.download_button",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "data",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": true
      },
      {
        "name": "file_name",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "mime",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_click",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.checkbox",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "bool",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.radio",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "options",
        "type": "sequence",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "index",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "format_func",
        "type": "function",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "horizontal",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.selectbox",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "options",
        "type": "sequence",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "index",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "format_func",
        "type": "function",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.multiselect",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "options",
        "type": "sequence",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "default",
        "type": "list",
        "defaultValue": "[]",
        "required": false,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "format_func",
        "type": "function",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.slider",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "min_value",
        "type": "int",
        "defaultValue": "0",
        "required": false,
        "keyValue": false
      },
      {
        "name": "max_value",
        "type": "int",
        "defaultValue": "100",
        "required": false,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "int",
        "defaultValue": "0",
        "required": false,
        "keyValue": false
      },
      {
        "name": "step",
        "type": "int",
        "defaultValue": "0",
        "required": false,
        "keyValue": false
      },
      {
        "name": "format",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.select_slider",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "options",
        "type": "sequence",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "list",
        "defaultValue": "()",
        "required": false,
        "keyValue": false
      },
      {
        "name": "format_func",
        "type": "function",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.text_input",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "placeholder",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "max_chars",
        "type": "int",
        "defaultValue": 0,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "type",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "autocomplete",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.number_input",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "min_value",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "max_value",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "step",
        "type": "int",
        "defaultValue": "0.0",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "format",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.text_area",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "placeholder",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "max_chars",
        "type": "int",
        "defaultValue": 0,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "height",
        "type": "int",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.date_input",
    "imports": ["import streamlit as st", "import datetime as dt"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "datetime",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "min_value",
        "type": "datetime",
        "defaultValue": "-10",
        "required": false,
        "keyValue": false
      },
      {
        "name": "max_value",
        "type": "datetime",
        "defaultValue": "+10",
        "required": false,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.time_input",
    "imports": ["import streamlit as st", "import datetime as dt"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "datetime",
        "defaultValue": "",
        "required": false,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.file_uploader",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "type",
        "type": "str",
        "defaultValue": "[]",
        "required": false,
        "keyValue": false
      },
      {
        "name": "accept_multiple_files",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.camera_input",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  {
    "category": "widgets",
    "name": "st.color_picker",
    "imports": ["import streamlit as st"],
    "parameters": [
      {
        "name": "label",
        "type": "str",
        "defaultValue": "",
        "required": true,
        "keyValue": false
      },
      {
        "name": "value",
        "type": "str",
        "defaultValue": "000000",
        "required": false,
        "keyValue": false
      },
      {
        "name": "help",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "disabled",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
      {
        "name": "key",
        "type": "str",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "on_change",
        "type": "callable",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "args",
        "type": "tuple",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
      {
        "name": "kwargs",
        "type": "dict",
        "defaultValue": "",
        "required": false,
        "keyValue": true
      },
    ]
  },
  // Chart elements
  {
    "category": "charts",
    "name": "st.line_chart",
    "shouldUsePlaceholder": true,
    "placeholderData": ["pd.DataFrame(np.random.randn(20, 3)", "columns=['a', 'b', 'c'])"],
    "imports": ["import streamlit as st", "import pandas as pd", "import numpy as np"],
    "parameters": [
      {
        "name": "data",
        "type": "list",
        "defaultValue": "[]",
        "required": true,
        "keyValue": false
      },
      {
        "name": "x",
        "type": "str",
        "defaultValue": "0",
        "required": false,
        "keyValue": true
      },
      {
        "name": "y",
        "type": "str",
        "defaultValue": "[]",
        "required": false,
        "keyValue": true
      },
      {
        "name": "width",
        "type": "int",
        "defaultValue": "0",
        "required": false,
        "keyValue": true
      },
      {
        "name": "height",
        "type": "int",
        "defaultValue": "auto",
        "required": false,
        "keyValue": true
      },
      {
        "name": "use_container_width",
        "type": "bool",
        "defaultValue": false,
        "required": false,
        "keyValue": true
      },
    ]
  },
]