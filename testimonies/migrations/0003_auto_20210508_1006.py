# Generated by Django 2.1 on 2021-05-08 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testimonies', '0002_testimonies_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testimonies',
            name='Testifier',
            field=models.CharField(max_length=50),
        ),
    ]