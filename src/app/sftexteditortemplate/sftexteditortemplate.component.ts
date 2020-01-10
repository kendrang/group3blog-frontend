import {Component, ViewChild} from '@angular/core';
import {ToolbarService, LinkService, ImageService, RichTextEditorComponent} from '@syncfusion/ej2-angular-richtexteditor';
import { HtmlEditorService, RichTextEditor, NodeSelection } from '@syncfusion/ej2-angular-richtexteditor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-control-content',
  templateUrl: 'sftexteditortemplate.component.html',

})
export class SftexteditortemplateComponent {
  public value: any = null;
  public imageSetting = {
    saveUrl: 'http://localhost:8080/api/images/upload',
  };

}
