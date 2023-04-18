import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab2Page {
  // public alertButtons = ['YES', 'NO'];

  isAlertOpen = false;

  // Customise button action
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
    {
      text: 'Idk',
      role: 'idk',
      handler: () => {
        console.log('I do not know');
      },
    },
  ];

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK', 'IDK'],
    });

    await alert.present();
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
