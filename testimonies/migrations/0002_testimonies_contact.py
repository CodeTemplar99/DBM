# Generated by Django 2.1 on 2021-05-08 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testimonies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='testimonies',
            name='Contact',
            field=models.CharField(max_length=11, null=True),
        ),
    ]
