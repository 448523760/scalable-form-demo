import React from "react";
import "./styles.css";
import ScalableForm from "scalable-form-antd";

export default class FormAntdExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        note: "good",
        city: "hangzhou"
      }
    };
    this.jsonSchema = {
      title: "Scalable Form render sdk with Ant Design components",
      description: "",
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string",
          title: "名称",
          default: "",
          maxLength: 15
        },
        note: {
          type: "string",
          title: "备注",
          default: "",
          maxLength: 150
        },
        city: {
          type: "string",
          title: "请选择城市",
          default: "",
          enum: ["beijing", "shanghai", "hangzhou"],
          enumNames: ["北京", "上海", "杭州"]
        }
      }
    };
    this.uiSchema = {
      name: {
        "ui:help": '关于"名称"字段的帮助说明',
        "ui:options": {
          placeholder: "请输入名称"
        }
      },
      note: {
        "ui:widget": "textarea",
        "ui:options": {
          validate: [
            {
              type: "empty",
              message: "备注不能为空"
            }
          ]
        }
      },
      city: {
        "ui:widget": "radio",
        "ui:options": {
          vertical: false,
          validate: [
            {
              type: "empty",
              message: "请选择"
            }
          ]
        }
      }
    };
  }

  handleChanged = (formData, bizData) => {
    console.log("ScalableForm Changed!", formData);
    console.log("ScalableForm Changed!", bizData);
    this.setState({
      formData: { ...formData }
    });
  };

  handleSubmit = (formData, bizData) => {
    console.log("ScalableForm Submitted!", formData);
    console.log("ScalableForm Submitted!", bizData);
  };

  render() {
    return (
      <div className="scalable-form-demo-element">
        <ScalableForm
          jsonSchema={this.jsonSchema}
          uiSchema={this.uiSchema}
          formData={this.state.formData}
          onChange={this.handleChanged}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
