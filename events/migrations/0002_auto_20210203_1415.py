# Generated by Django 2.1.7 on 2021-02-03 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='Event',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
